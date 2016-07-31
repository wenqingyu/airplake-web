/**
 * Created by tww316 on 16/7/26.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import { green500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Index from './views/index';
import Demand from './views/demand';
import Login from './views/login';
import Provider from './views/provider';
import Register from './views/register';

import './assets/style/reset.css';

const styles = {
  container: {
    textAlign: 'center'
  }
}

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: green500,
  },
});

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
