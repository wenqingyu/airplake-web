/**
 * Created by tww316 on 16/7/30.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';

import { blue400 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center'
  }
}

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: blue400,
  },
});

class Index extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <section style={styles.container}>
          {this.props.children}
        </section>
      </MuiThemeProvider>
    );
  }
}

export default Index;
