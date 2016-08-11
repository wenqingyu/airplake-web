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
import validator from '../utils/validator';

import emmiter from '../utils/emmiter';

class Login extends Component {

  constructor(props, context) {
    super(props, context);

    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);

    this.login = this.login.bind(this);
    this.register = this.register.bind(this);

    this.state = {
      username: '',
      errUsername: '',
      password: ''
    }
  }

  usernameChange(event) {
    var val = event.target.value;
    var msg = validator.checkUsername(val);
    if (msg) {
      this.setState({errUsername: msg})
    } else {
      this.setState({errUsername: ''})
    }
    this.setState({
      username: val
    })
  }

  passwordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  login() {
    if (this.state.username === '' || this.state.password === '') {
      emmiter.publish('openSnackbar', '用户名和密码不能为空');
      return;
    }

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
          var ret = res.body;
          if (ret.status == 'OK') {
            storage.set('token', res.header['x-token']);
            emmiter.publish('openSnackbar', '登录成功');
            if (ret.data.type == 1) {
              browserHistory.push('vendor');
            } else if (ret.data.type == 2) {
              browserHistory.push('demand');
            } else {
              emmiter.publish('openSnackbar', '你究竟是谁？...');
            }
          } else {
            emmiter.publish('openSnackbar', ret.error_msg);
          }
        }
      }, (err) => {
        emmiter.publish('openSnackbar', '网络开小差了...');
      })
  }

  register(event) {
    event.preventDefault();
    browserHistory.push('register');
  }

  render() {
    return (
      <section style={baseStyle.wrapper}>
        <div>
          <TextField
            value={this.state.username}
            errorText={this.state.errUsername}
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
