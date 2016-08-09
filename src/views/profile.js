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
import storage from '../utils/storage';
import format from '../utils/date-format';
import validator from '../utils/validator';

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
    this.idCardChange = this.idCardChange.bind(this);

    this.submit = this.submit.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);

    this.state = {
      username: '',
      errUsername: '',
      password: '',
      rePassword: '',
      city: '',
      errCity: '',
      birthday: null,
      mobile: '',
      errMobile: '',
      wechat: '',
      errWechat: '',
      idCard: '',
      errIdCard: '',
      snackBar: {
        open: false,
        message: '',
        autoHideDuration: 1000
      }
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

  rePasswordChange(event) {
    this.setState({
      rePassword: event.target.value
    })
  }

  cityChange(event) {
    var val = event.target.value;
    var msg = validator.checkChinese(val);
    if (msg) {
      this.setState({errCity: msg})
    } else {
      this.setState({errCity: ''})
    }
    this.setState({
      city: val
    })
  }

  birthdayChange(event, date) {
    this.setState({
      birthday: date
    })
  }

  mobileChange(event) {
    var val = event.target.value;
    var msg = validator.checkMobile(val);
    if (msg) {
      this.setState({errMobile: msg})
    } else {
      this.setState({errMobile: ''})
    }
    this.setState({
      mobile: val
    })
  }

  wechatChange(event) {
    var val = event.target.value;
    var msg = validator.checkWechat(val);
    if (msg) {
      this.setState({errWechat: msg})
    } else {
      this.setState({errWechat: ''})
    }
    this.setState({
      wechat: val
    })
  }

  idCardChange(event) {
    var val = event.target.value;
    var msg = validator.checkIdCard(val);
    if (msg) {
      this.setState({errIdCard: msg})
    } else {
      this.setState({errIdCard: ''})
    }
    this.setState({
      idCard: val
    })
  }

  closeSnackBar() {
    this.setState({
      snackBar: {
        open: false,
        message: ''
      }
    })
  }

  submit() {
    if (this.state.username === '') {
      this.setState({
        snackBar: {
          open: true,
          message: '用户名不能为空'
        }
      })
      return;
    }
    if (this.state.password === '' || this.state.rePassword === '') {
      this.setState({
        snackBar: {
          open: true,
          message: '密码不能为空'
        }
      })
      return;
    }
    if (this.state.password != this.state.rePassword) {
      this.setState({
        snackBar: {
          open: true,
          message: '两次输入的密码不一致'
        }
      })
      return;
    }
    if (this.state.city === '') {
      this.setState({
        snackBar: {
          open: true,
          message: '城市不能为空'
        }
      })
      return;
    }

    var birthday = format.normal(this.state.birthday);
    var params = {
      user: {
        name: this.state.username,
        password: this.state.password,
        birthday: birthday,
        tel: this.state.mobile,
        wechat: this.state.wechat,
        city: this.state.city,
        idCard: this.state.idCard
      }
    }

    var token = this.props.location.query.token;

    request
      .put(config.api + '/api/v1/users/' + token)
      .type('json')
      .send(params)
      .then((res) => {
        if (res.status == 200) {
          var ret = res.body;
          if (ret.status == 'OK') {
            storage.set('token', res.header['x-token']);
            this.setState({
              snackBar: {
                open: true,
                message: '你的AIRPLAKE账号已创建成功'
              }
            });
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
            errorText={this.state.errUsername}
            onChange={this.usernameChange}
            floatingLabelText="用户名（必填）"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div>
          <TextField
            value={this.state.password}
            onChange={this.passwordChange}
            type="password"
            floatingLabelText="密码（必填）"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div>
          <TextField
            value={this.state.rePassword}
            onChange={this.rePasswordChange}
            type="password"
            floatingLabelText="再次输入密码（必填）"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div>
          <TextField
            value={this.state.city}
            errorText={this.state.errCity}
            onChange={this.cityChange}
            floatingLabelText="城市（必填）"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div>
          <TextField
            value={this.state.mobile}
            errorText={this.state.errMobile}
            onChange={this.mobileChange}
            floatingLabelText="手机号"
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
            errorText={this.state.errWechat}
            onChange={this.wechatChange}
            floatingLabelText="微信号"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div>
          <TextField
            value={this.state.idCard}
            errorText={this.state.errIdCard}
            onChange={this.idCardChange}
            floatingLabelText="身份证号"
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
