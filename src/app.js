/**
 * Created by tww316 on 16/7/22.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import './assets/scss/reset.scss';
import './assets/scss/layout.scss';

// views
import demand from './views/demand/demand';
import login from './views/login/login';
import provider from './views/provider/provider';
import register from './views/register/register';

class Application extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link to="demand">demand</Link>
          <Link to="login">login</Link>
          <Link to="provider">provider</Link>
          <Link to="register">register</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

var app = document.getElementById('app');

render((
  <Provider>
    <Router history={browserHistory}>
      <Route path="/" component={Application}>
        <IndexRoute component={login}/>
        <Route path="demand" component={demand}></Route>
        <Route path="login" component={login}></Route>
        <Route path="provider" component={provider}></Route>
        <Route path="register" component={register}></Route>
      </Route>
    </Router>
  </Provider>
), app);
