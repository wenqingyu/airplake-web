/**
 * Created by tww316 on 16/7/30.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';

import { blue400 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import baseStyle from '../assets/styles/base';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: blue400,
  },
});

class Index extends Component {
  constructor(props, context) {
    super(props, context);

    this.closeDialog = this.closeDialog.bind(this);

    this.state = {
      dialog: {
        open: false
      },
      snackBar: {
        open: false,
        message: '',
        autoHideDuration: 1000
      }
    }
  }

  closeDialog() {
    this.setState({
      dialog: {
        open: false
      }
    });
  }

  render() {
    const closeDialogAction = (
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.closeDialog}
        />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <section style={baseStyle.container}>
          {this.props.children}
          <Snackbar
            open={this.state.snackBar.open}
            message={this.state.snackBar.message}
            autoHideDuration={this.state.snackBar.autoHideDuration ? this.state.snackBar.autoHideDuration: 2000}
            />

          <Dialog
            open={this.state.dialog.open}
            actions={closeDialogAction}
            onRequestClose={this.closeDialog}
            >
            恭喜您提交成功，请移步至邮箱完成注册。
          </Dialog>
        </section>
      </MuiThemeProvider>
    );
  }
}

export default Index;
