/**
 * Created by tww316 on 16/7/26.
 */
import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import request from 'superagent';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import config from '../const/config';

const styles = {
  login: {
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

class Login extends Component {

  constructor(props, context) {
    super(props, context);

    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);

    this.state = {
      username: '',
      password: ''
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
      username: this.state.username,
      password: this.state.password
    }

    request
      .post(config.api + '/api/v1/users/login')
      .set('Content-Type', 'application/json')
      .send(params)
      .end((err, res) => {
        console.log(err);
        console.log(res);
        if (res.code == 200) {
          if (res.data.type == 1) {
            browserHistory.push('/provider');
          } else {
            browserHistory.push('/demand');
          }
        }
      })
  }

  register(event) {
    event.preventDefault();
    browserHistory.push('/register');
  }

  render() {
    return (
      <section style={styles.login}>
        <h1 style={styles.h1}>Welcome!</h1>

        <div>
          <TextField
            value={this.state.username}
            onChange={this.usernameChange}
            floatingLabelText="用户名"
            />
        </div>
        <div>
          <TextField
            value={this.state.password}
            onChange={this.passwordChange}
            type="password"
            floatingLabelText="密码"
            />
        </div>
        <div style={styles.btn_wrapper}>
          <RaisedButton
            label="登录"
            style={styles.btn}
            secondary={true}
            onTouchTap={this.login}
            />
          <RaisedButton
            label="注册"
            onTouchTap={this.register}
            />
        </div>
      </section>
    )
  }
}

export default Login;
