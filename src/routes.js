/**
 * Created by tww316 on 16/7/26.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import Index from './views/index';
import Demand from './views/demand';
import Login from './views/login';
import Provider from './views/provider';
import Register from './views/register';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Index}>
          <IndexRoute component={Login}/>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/demand" component={Demand}></Route>
          <Route path="/provider" component={Provider}></Route>
        </Route>
      </Router>
    );
  }
}

export default Routes;
