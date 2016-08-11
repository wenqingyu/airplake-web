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
import validator from '../utils/validator';

import emmiter from '../utils/emmiter';

class Register extends Component {

  constructor(props, context) {
    super(props, context);

    this.emailChange = this.emailChange.bind(this);
    this.register = this.register.bind(this);
    this.backLogin = this.backLogin.bind(this);

    this.state = {
      email: '',
      errEmail: '',
      registerDisabled: false,
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

  register() {
    if (this.state.email === '') {
      emmiter.publish('openSnackbar', '邮箱不能为空');
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
            emmiter.publish('openDialog', '提交成功，请移步邮箱完成注册。');
          } else {
            emmiter.publish('openSnackbar', ret.error_msg);
          }
        }
      }, (err) => {
        emmiter.publish('openSnackbar', '网络开小差了...');
      })
  }

  render() {
    return (
      <section style={baseStyle.wrapper}>
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
