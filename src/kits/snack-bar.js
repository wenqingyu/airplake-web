/**
 * Created by tww316 on 16/8/3.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import Snackbar from 'material-ui/Snackbar';

import emmiter from '../utils/emmiter';

class AirSnackBar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      message: '',
      autoHideDuration: 2000
    }
  }

  render() {
    emmiter.subscribe('openSnackbar', (msg) => {
      this.setState({
        open: true,
        message: msg
      })
    });

    return (
      <Snackbar
        open={this.state.open}
        message={this.state.message}
        autoHideDuration={this.state.autoHideDuration}
        />
    )
  }
}

export default AirSnackBar;
