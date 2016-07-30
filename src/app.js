/**
 * Created by tww316 on 16/7/22.
 */
import React from 'react';
import { render } from 'react-dom';

import { green500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Menu from './menu';

import './assets/scss/base.scss';
import './assets/scss/reset.scss';

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

injectTapEventPlugin();

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <container style={styles.container}>
      <Menu />
    </container>
  </MuiThemeProvider>
, document.getElementById('app'));
