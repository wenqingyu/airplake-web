/**
 * Created by tww316 on 16/7/25.
 */
import React, { Component } from 'react';
import request from 'superagent';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import CheckBox from 'material-ui/Checkbox';

import cityMap from '../../common/city';

// load citys
const cityItems = [];
cityMap.forEach(cm => {
  cityItems.push(<MenuItem value={cm.city_name} key={cm.city_code} primaryText={cm.city_name} />);
})

class Provider extends Component {
  constructor(props, context) {
    super(props, context);

    this.rangeState = {value: '004'};
  }

  handleRangeChange = (event, index, value) => this.setRangeState({value});

  handleRegister() {
    var username = document.getElementById('username');
  }

  render() {
    return (
      <section className="provider">
        <form>
          <div>
            <TextField
              id="team_name"
              floatingLabelText="团队名称"
              />
          </div>
          <div>
            <TextField
              id="mobile"
              floatingLabelText="手机号"
              />
          </div>
          <div>
            <TextField
              id="wechat"
              floatingLabelText="微信号"
              />
          </div>
          <div>
            <TextField
              id="email"
              floatingLabelText="邮箱地址"
              />
          </div>
          <div>
            <SelectField
              maxHeight={200}
              value={this.rangeState.value}
              onChange={this.handleRangeChange}
              floatingLabelText="服务范围"
            >
              {cityItems}
            </SelectField>
          </div>
          <div className="btn-wrapper">
            <RaisedButton
              className="btn"
              label="注册"
              primary={true}
              onTouchTap={this.handleRegister}
              />
          </div>
        </form>
      </section>
    );
  }
}

export default Provider;
