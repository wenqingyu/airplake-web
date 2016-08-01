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

import config from '../const/config';

const styles = {
  register: {
    marginTop: '10rem'
  },
  h1: {
    fontSize: '2rem'
  },
  btn_wrapper: {
    marginTop: '1rem'
  },
  btn: {
    marginRight: '2rem'
  }
}

class Register extends Component {

  constructor(props, context) {
    super(props, context);

    this.emailChange = this.emailChange.bind(this);
    this.register = this.register.bind(this);
    this.backLogin = this.backLogin.bind(this);
    this.closeDialog = this.closeDialog.bind(this);

    this.state = {
      email: '',
      dialogOpen: false
    }
  }

  emailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  backLogin() {
    browserHistory.push('/login');
  }

  register() {
    var params = {
      email: this.state.email
    }

    request
      .post(config.api + '/api/v1/users/verification')
      .set('Content-Type', 'application/json')
      .send(params)
      .end((err, res) => {
        console.log(res);
        if (res.code == 200) {
          this.setState({
            dialogOpen: true
          });
        }
      });
  }

  closeDialog() {
    this.setState({
      dialogOpen: false
    });
  }

  render() {
    const closeDialogAction = (
      <FlatButton
        label="好的"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.closeDialog}
        />
    );

    return (
      <section style={styles.register}>
        <Dialog
          open={this.state.dialogOpen}
          actions={closeDialogAction}
          onRequestClose={this.closeDialog}
          >
          恭喜您提交成功，请移步至邮箱完成注册。
        </Dialog>

        <h1 style={styles.h1}>欢迎注册</h1>

        <div>
          <TextField
            value={this.state.email}
            onChange={this.emailChange}
            floatingLabelText="邮箱"
            />
        </div>
        <div style={styles.btn_wrapper}>
          <RaisedButton
            label="注册"
            style={styles.btn}
            secondary={true}
            onTouchTap={this.register}
            />
          <RaisedButton
            label="返回登录"
            //href="/login"
            onTouchTap={this.backLogin}
            />
        </div>
      </section>
    );
  }
}

export default Register;
