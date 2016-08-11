/**
 * Created by tww316 on 16/8/3.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import emmiter from '../utils/emmiter';

class AirDialog extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      text: ''
    }

    this.close = this.close.bind(this);
  }

  close() {
    this.setState({
      open: false
    });
  }

  render() {
    const closeAction = (
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.close}
        />
    );

    emmiter.subscribe('openDialog', (msg) => {
      this.setState({
        open: true,
        text: msg
      })
    });

    emmiter.subscribe('closeDialog', (msg) => {
      this.close();
    });

    return(
      <Dialog
        open={this.state.open}
        actions={closeAction}
        children={this.state.text}
        onRequestClose={this.close}
        >
      </Dialog>
    );
  }
}

export default AirDialog;
