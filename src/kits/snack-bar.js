/**
 * Created by tww316 on 16/8/3.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import Snackbar from 'material-ui/Snackbar';

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
