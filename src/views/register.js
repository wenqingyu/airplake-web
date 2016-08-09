/**
 * Created by tww316 on 16/7/26.
 */
import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import request from 'superagent';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';

import baseStyle from '../assets/styles/base';
import config from '../consts/config';
import validator from '../utils/validator';

class Register extends Component {

  constructor(props, context) {
    super(props, context);

    this.emailChange = this.emailChange.bind(this);
    this.register = this.register.bind(this);
    this.backLogin = this.backLogin.bind(this);

    this.closeDialog = this.closeDialog.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);

    this.state = {
      email: '',
      errEmail: '',
      registerDisabled: false,
      dialog: {
        open: false,
        text: ''
      },
      snackBar: {
        open: false,
        message: '',
        autoHideDuration: 1000
      }
    }
  }

  emailChange(event) {
    var val = event.target.value;
    var msg = validator.checkEmail(val);
    if (msg) {
      this.setState({errEmail: msg})
    } else {
      this.setState({errEmail: ''})
    }
    this.setState({
      email: val
    })
  }

  backLogin() {
    browserHistory.push('login');
  }

  closeDialog() {
    this.setState({
      dialog: {
        open: false
      },
      registerDisabled: true
    });
  }

  closeSnackBar() {
    this.setState({
      snackBar: {
        open: false,
        message: ''
      }
    })
  }

  register() {
    if (this.state.email === '') {
      this.setState({
        snackBar: {
          open: true,
          message: '邮箱不能为空'
        }
      })
      return;
    }

    var params = {
      email: this.state.email
    }

    request
      .post(config.api + '/api/v1/users/verification')
      .type('json')
      .send(params)
      .then((res) => {
        if (res.status == 200) {
          let ret = res.body;
          if (ret.status == 'OK') {
            this.setState({
              dialog: {
                open: true,
                text: '提交成功，请移步邮箱完成注册。'
              }
            })
          } else {
            this.setState({
              snackBar: {
                open: true,
                message: ret.error_msg
              }
            });
          }
        }
      }, (err) => {
        this.setState({
          snackBar: {
            open: true,
            message: '网络开小差了...'
          }
        });
      })
  }

  render() {
    const closeDialogAction = (
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.closeDialog}
        />
    );

    return (
      <section style={baseStyle.wrapper}>
        <Snackbar
          open={this.state.snackBar.open}
          message={this.state.snackBar.message}
          autoHideDuration={this.state.snackBar.autoHideDuration ? this.state.snackBar.autoHideDuration : 1500}
          onRequestClose={this.closeSnackBar}
          />
        <Dialog
          open={this.state.dialog.open}
          actions={closeDialogAction}
          children={this.state.dialog.text}
          onRequestClose={this.closeDialog}
          />

        <h1 style={baseStyle.title}>欢迎注册</h1>

        <div>
          <TextField
            value={this.state.email}
            errorText={this.state.errEmail}
            onChange={this.emailChange}
            floatingLabelText="邮箱"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div style={baseStyle.btnWrapper}>
          <RaisedButton
            label="注册"
            style={baseStyle.btn}
            secondary={true}
            disabled={this.state.registerDisabled}
            onTouchTap={this.register}
            />
          <RaisedButton
            label="返回登录"
            labelStyle={baseStyle.baseColor}
            onTouchTap={this.backLogin}
            />
        </div>
      </section>
    );
  }
}

export default Register;
