/**
 * Created by tww316 on 16/7/26.
 */
import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import request from 'superagent';
import $ from 'jQuery';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import config from '../const/config';

const userTypes = [
  {key: 0, val: '服务商'},
  {key: 1, val: '用户'}
]

const typeItems = [];
userTypes.forEach(ut => {
  typeItems.push(<MenuItem value={ut.key} key={ut.val} primaryText={`${ut.val}`}/>);
})

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

    // func bind
    this.emailChange = this.emailChange.bind(this);
    this.userTypeSelect = this.userTypeSelect.bind(this);
    this.register = this.register.bind(this);
    this.backLogin = this.backLogin.bind(this);
    this.closeDialog = this.closeDialog.bind(this);

    // default value
    this.state = {
      userType: 1,
      email: '',
      dialogOpen: false
    }
  }

  // set email
  emailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  // select userType
  userTypeSelect(event, index, value) {
    this.setState({
      userType: value
    })
  }

  // back to login
  backLogin() {
    browserHistory.push('/login');
  }

  // register submit
  register() {
    var email = this.state.email,
      userType = this.state.userType;

    request
      .post(config.api + '/api/v1/users/verification')
      .set('Content-Type', 'application/json')
      .send({
        "email": email,
        "type": userType
      })
      .end((err, res) => {
        if (res.code == 200) {
          this.setState({
            dialogOpen: true
          });
        }
      });
  }

  // dialog close
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
        <div>
          <SelectField
            value={this.state.userType}
            onChange={this.userTypeSelect}
            floatingLabelText="请选择您的角色类型"
            >
            {typeItems}
          </SelectField>
        </div>
        <div style={styles.btn_wrapper}>
          <RaisedButton
            label="注册"
            style={styles.btn}
            primary={true}
            onTouchTap={this.register}
            />
          <RaisedButton
            label="返回登录"
            onTouchTap={this.backLogin}
            />
        </div>
      </section>
    );
  }
}

export default Register;
