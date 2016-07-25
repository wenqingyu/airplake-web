/**
 * Created by tww316 on 16/7/26.
 */
import React, { Component } from 'react';
import request from 'superagent';

import { green500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: green500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleLogin() {
    var username = document.getElementById('username'),
      password = document.getElementById('password');
  }

  handleRegister() {
    console.log('register');
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <section className="login">
          <form className="container" style={styles.container}>
            <h1>Welcome!</h1>

            <div>
              <TextField
                id="username"
                floatingLabelText="用户名"
                />
            </div>
            <div>
              <TextField
                id="password"
                type="password"
                floatingLabelText="密码"
                />
            </div>
            <div className="flex">
              <RaisedButton
                className="btn"
                label="登录"
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
      </MuiThemeProvider>
    );
  }
}

export default Main;
