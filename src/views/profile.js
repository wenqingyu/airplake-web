/**
 * Created by tww316 on 16/8/3.
 */
import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import request from 'superagent';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Snackbar from 'material-ui/Snackbar';

import baseStyle from '../assets/styles/base';
import config from '../consts/config';

class Profile extends Component {
  constructor(props, context) {
    super(props, context);

    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.rePasswordChange = this.rePasswordChange.bind(this);
    this.cityChange = this.cityChange.bind(this);
    this.birthdayChange = this.birthdayChange.bind(this);
    this.mobileChange = this.mobileChange.bind(this);
    this.wechatChange = this.wechatChange.bind(this);
    this.certificateChange = this.certificateChange.bind(this);

    this.submit = this.submit.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);

    this.state = {
      username: '',
      password: '',
      rePassword: '',
      city: '',
      birthday: null,
      mobile: '',
      wechat: '',
      certificate: '',
      snackBar: {
        open: false,
        message: '',
        autoHideDuration: 1000
      }
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

  rePasswordChange(event) {
    this.setState({
      rePassword: event.target.value
    })
  }

  cityChange(event) {
    this.setState({
      city: event.target.value
    })
  }

  birthdayChange(event, date) {
    this.setState({
      birthday: date
    })
  }

  mobileChange(event) {
    this.setState({
      mobile: event.target.value
    })
  }

  wechatChange(event) {
    this.setState({
      wechat: event.target.value
    })
  }

  certificateChange(event) {
    this.setState({
      certificate: event.target.value
    })
  }

  closeSnackBar() {
    this.setState({
      snackBar: {
        open: false
      }
    })
  }

  submit() {
    var params = {
      user: {
        name: this.state.username,
        password: this.state.password,
        birthday: this.state.birthday,
        tel: this.state.mobile,
        wechat: this.state.wechat,
        city: this.state.city,
        idCard: this.state.certificate
      }
    }

    var token = this.props.location.query.token;

    request
      .post(config.api + '/api/v1/users/' + token)
      .type('json')
      .send(params)
      .then((res) => {
        if (res.status == 200) {
          var ret = res.body;
          if (ret.status == 'OK') {
            this.setState({
              snackBar: {
                open: true,
                message: '你的AIRPLAKE账号已创建成功'
              }
            });
            browserHistory.push('home');
          } else {
            this.setState({
              snackBar: {
                open: true,
                message: '' + ret.error_msg
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

  render() {
    return (
      <section>
        <Snackbar
          open={this.state.snackBar.open}
          message={this.state.snackBar.message}
          autoHideDuration={this.state.snackBar.autoHideDuration ? this.state.snackBar.autoHideDuration : 1500}
          onRequestClose={this.closeSnackBar}
          />

        <h1 style={baseStyle.title}>完善个人信息</h1>

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
        <div>
          <TextField
            value={this.state.rePassword}
            onChange={this.rePasswordChange}
            type="password"
            floatingLabelText="再次输入密码"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div>
          <TextField
            value={this.state.city}
            onChange={this.cityChange}
            floatingLabelText="城市"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div>
          <DatePicker
            autoOk={true}
            value={this.state.birthday}
            onChange={this.birthdayChange}
            textFieldStyle={baseStyle.inputRequired}
            floatingLabelText="生日"
            />
        </div>
        <div>
          <TextField
            value={this.state.wechat}
            onChange={this.wechatChange}
            floatingLabelText="微信号"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div>
          <TextField
            value={this.state.certificate}
            onChange={this.certificateChange}
            floatingLabelText="身份证"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div style={baseStyle.btnWrapper}>
          <RaisedButton
            label="提交"
            secondary={true}
            onTouchTap={this.submit}
            />
        </div>
      </section>
    )
  }
}

export default Profile;
