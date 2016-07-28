/**
 * Created by tww316 on 16/7/26.
 */
import React, { Component } from 'react';
import request from 'superagent';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  h1: {
    fontSize: 20
  },
  button_wrapper: {
    marginTop: 10
  },
  button: {
    marginLeft: 20
  }
}

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 'Property Value'
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  //constructor(props, context) {
  //  super(props, context);
  //
  //  this.state = {
  //    username: '',
  //    password: ''
  //  }
  //}
  //
  //handleUsernameChange(event) {
  //  this.setState({
  //    username: event.target.value
  //  })
  //}
  //
  //handleChange(event) {
  //  this.setState({
  //    username: event.target.value,
  //  });
  //};
  //
  //handlePasswordChange(event) {
  //  this.setState({
  //    password: event.target.value
  //  })
  //}
  //
  handleLogin() {
    console.log(this.state.value);
  }

  handleRegister() {
    console.log('register');
  }

  render() {
    return (
      <section className="login">
        <form>
          <h1 style={styles.h1}>Welcome!</h1>
          <div>
            <TextField
              value={this.state.value}
              onChange={handleChange}
              floatingLabelText="用户名"
              />
          </div>
          <div>
            <TextField
              value={this.state.password}
              //onChnage={handlePasswordChange}
              type="password"
              floatingLabelText="密码"
              />
          </div>
          <div style={styles.button_wrapper}>
            <RaisedButton
              className="btn"
              label="登录"
              style={styles.button}
              primary={true}
              onTouchTap={this.handleLogin}
              />
            <RaisedButton
              className="btn"
              label="注册"
              onTouchTap={this.handleRegister}
              />
          </div>
        </form>
      </section>
    );
  }
}

export default Login;
