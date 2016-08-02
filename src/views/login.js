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
import storage from '../utils/storage';

class Login extends Component {

  constructor(props, context) {
    super(props, context);

    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);

    this.state = {
      username: '',
      password: '',
    }
  }

  usernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  passwordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  login() {
    var params = {
      name: this.state.username,
      password: this.state.password
    }

    request
      .post(config.api + '/api/v1/users/login')
      .type('json')
      .send(params)
      .then((res) => {
        if (res.status == 200) {
          storage.set('token', res.header['token']);
          var ret = res.body;
          if (ret.code == 200) {
            this.setState({
              snackBar: {
                open: true,
                message: '登录成功'
              }
            });
            if (ret.data.type == 1) {
              browserHistory.push('vendor');
            } else if (ret.data.type == 2) {
              browserHistory.push('demand');
            } else {
              this.setState({
                snackBar: {
                  open: true,
                  message: '你究竟是谁？...'
                }
              });
            }
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
            message: '你的网络似乎不太好...'
          }
        });
      })
  }

  register(event) {
    event.preventDefault();
    browserHistory.push('register');
  }

  render() {
    return (
      <section style={baseStyle.wrapper}>
        <h1 style={baseStyle.title}>Welcome!</h1>

        <div>
          <TextField
            value={this.state.username}
            onChange={this.usernameChange}
            floatingLabelText="用户名"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div>
          <TextField
            value={this.state.password}
            onChange={this.passwordChange}
            type="password"
            floatingLabelText="密码"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div style={baseStyle.btnWrapper}>
          <RaisedButton
            label="登录"
            style={baseStyle.btn}
            secondary={true}
            onTouchTap={this.login}
            />
          <RaisedButton
            label="注册"
            labelStyle={baseStyle.baseColor}
            onTouchTap={this.register}
            />
        </div>
      </section>
    )
  }
}

export default Login;
