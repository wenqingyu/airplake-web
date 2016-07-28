/**
 * Created by tww316 on 16/7/22.
 */
import React from 'react';
import { render } from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import { green500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Login from './views/login';

import './assets/scss/base.scss';
import './assets/scss/layout.scss';
import './assets/scss/reset.scss';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: green500,
  },
});

injectTapEventPlugin();

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Login />
  </MuiThemeProvider>
, document.getElementById('app'));
