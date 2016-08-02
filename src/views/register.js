/**
 * Created by tww316 on 16/7/26.
 */
import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import request from 'superagent';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import baseStyle from '../assets/styles/base';
import config from '../consts/config';

class Register extends Component {

  constructor(props, context) {
    super(props, context);

    this.emailChange = this.emailChange.bind(this);
    this.register = this.register.bind(this);
    this.backLogin = this.backLogin.bind(this);

    this.state = {
      email: '',
    }
  }

  emailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  backLogin() {
    browserHistory.push('login');
  }

  register() {
    var params = {
      email: this.state.email
    }

    request
      .post(config.api + '/api/v1/users/verification')
      .type('json')
      .send(params)
      .then((res) => {
        if (res.status == 200) {
          this.setState({
            dialogOpen: true
          })
        } else {
          this.setState({
            snackBar: {
              open: true,
              message: ret.error_msg
            }
          });
        }
      }, (err) => {
        this.setState({
          snackBar: {
            open: true,
            message: '你的网络似乎不太好...'
          }
        });
      })
  }

  render() {

    return (
      <section style={baseStyle.wrapper}>
        <h1 style={baseStyle.title}>欢迎注册</h1>

        <div>
          <TextField
            value={this.state.email}
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
