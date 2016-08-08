/**
 * Created by tww316 on 16/8/8.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

import { blue400 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import baseStyle from '../assets/styles/base';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: blue400,
  },
});

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.switchRoute = this.switchRoute.bind(this);

    this.state = {
      title: '标题',
      drawerOpen: false
    }
  }

  toggleDrawer() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  switchRoute(title) {
    this.setState({
      title: title,
      drawerOpen: false
    })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <section style={baseStyle.container}>
          <AppBar
            title={this.title}
            style={baseStyle.baseBgColor}
            onLeftIconButtonTouchTap={this.toggleDrawer}
            iconElementRight={
              <IconMenu
                iconButtonElement={
                  <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              >
                <MenuItem primaryText="Sign out" />
              </IconMenu>
            }
            />
          <Drawer
            docked={false}
            width={200}
            open={this.state.drawerOpen}
            onRequestChange={this.toggleDrawer}
            >
            <MenuItem onTouchTap={this.switchRoute('完善个人信息')}>
              <Link to="/profile" activeStyle={{color: blue400}}>完善个人信息</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.switchRoute('发布需求')}>
              <Link to="/demand" activeStyle={{color: blue400}}>发布需求</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.switchRoute('成为服务商')}>
              <Link to="/vendor" activeStyle={{color: blue400}}>成为服务商</Link>
            </MenuItem>
          </Drawer>
          {this.props.children}
        </section>
      </MuiThemeProvider>
    );
  }
}

export default Home;
