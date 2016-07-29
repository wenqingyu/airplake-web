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
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import citys from '../const/citys';
import {ranges, uavs, cameras, services} from '../const/provider';

const styles = {
  btn_wrapper: {
    marginTop: '1rem'
  }
}

// load citys
const cityItems = [];
citys.forEach(cm => {
  cityItems.push(<MenuItem value={cm.name} key={cm.code} primaryText={`${cm.name}`} />);
});

const rangeItems = [];
ranges.forEach(r => {
  rangeItems.push(<MenuItem value={r.key} primaryText={`${r.val}`} />)
})

const uavItems = [];
uavs.forEach(u => {
  uavItems.push(<MenuItem value={u.key} primaryText={u.val} />)
})

const cameraItems = [];
cameras.forEach(c => {
  cameraItems.push(<MenuItem value={c.key} primaryText={c.val} />)
})

const serviceItems = [];
services.forEach(c => {
  serviceItems.push(<MenuItem value={c.key} primaryText={c.val} />)
})

class Provider extends Component {
  constructor(props, context) {
    super(props, context);

    this.teamChange = this.teamChange.bind(this);
    this.mobileChange = this.mobileChange.bind(this);
    this.wechatChange = this.wechatChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.describeChange = this.describeChange.bind(this);

    this.citySelect = this.citySelect.bind(this);
    this.rangeSelect = this.rangeSelect.bind(this);
    this.uavSelect = this.uavSelect.bind(this);
    this.cameraSelect = this.cameraSelect.bind(this);
    this.serviceSelect = this.serviceSelect.bind(this);

    this.uavCheck = this.uavCheck.bind(this);
    this.cameraCheck = this.cameraCheck.bind(this);
    this.othersCheck = this.othersCheck.bind(this);

    this.submit = this.submit.bind(this);

    this.team = '';

    // default values
    this.state = {
      team: '',
      mobile: '',
      wechat: '',
      email: '',
      city: '004',
      describe: '',
      range: 0,
      uav: 0,
      camera: 0,
      service: 0,
      uavChk: false,
      cameraChk: false,
      othersChk: false
    };
  }


  // set team
  teamChange(event) {
    this.setState({
      team: event.target.value
    })
  }

  // set mobile
  mobileChange(event) {
    this.setState({
      mobile: event.target.value
    })
  }

  // set wechat
  wechatChange(event) {
    this.setState({
      wechat: event.target.value
    })
  }

  // set email
  emailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  // set describe
  describeChange(event) {
    this.setState({
      describe: event.target.value
    })
  }

  // city select
  citySelect(event, index, value){
    this.setState({
      city: value
    });
  }

  // range select
  rangeSelect(event, index, value){
    this.setState({
      range: value
    });
  }

  // uav select
  uavSelect(event, index, value){
    this.setState({
      uav: value
    });
  }

  // camera select
  cameraSelect(event, index, value){
    this.setState({
      camera: value
    });
  }

  // service select
  serviceSelect(event, index, value){
    this.setState({
      service: value
    });
  }

  // uav check
  uavCheck(event, isInputChecked) {
    this.setState({
      navChk: isInputChecked
    })
  }

  // camera check
  cameraCheck(event, isInputChecked) {
    this.setState({
      cameraChk: isInputChecked
    })
  }

  // others check
  othersCheck(event, isInputChecked) {
    this.setState({
      othersChk: isInputChecked
    })
  }

  submit() {
    alert('握草，你提交的东西可真多！');
  }

  render() {
    return (
      <section className="provider">
        <form>
          <div>
            <TextField
              value={this.state.team}
              onChange={this.teamChange}
              floatingLabelText="团队名称"
              />
          </div>
          <div>
            <TextField
              value={this.state.mobile}
              onChange={this.mobileChange}
              floatingLabelText="手机号"
              />
          </div>
          <div>
            <TextField
              id="wechat"
              value={this.state.wechat}
              onChange={this.wechatChange}
              floatingLabelText="微信号"
              />
          </div>
          <div>
            <TextField
              id="email"
              value={this.state.email}
              onChange={this.emailChange}
              floatingLabelText="邮箱地址"
              />
          </div>
          <div>
            <SelectField
              maxHeight={200}
              value={this.state.city}
              onChange={this.citySelect}
              floatingLabelText="服务范围"
            >
              {cityItems}
            </SelectField>
          </div>
          <div>
            <SelectField
              maxHeight={200}
              value={this.state.range}
              onChange={this.rangeSelect}
              floatingLabelText="服务时间"
              >
              {rangeItems}
            </SelectField>
          </div>
          <div>
            <h2>器材类型</h2>
            <CheckBox
              checkedIcon={<ActionFavorite />}
              uncheckedIcon={<ActionFavoriteBorder />}
              label="无人机"
              //checked={this.state.uavChk}
              onCheck={this.uavCheck}
            />
            <SelectField
              maxHeight={200}
              value={this.state.uav}
              onChange={this.uavSelect}
            >
              {uavItems}
            </SelectField>
            <CheckBox
              checkedIcon={<ActionFavorite />}
              uncheckedIcon={<ActionFavoriteBorder />}
              label="相机"
              //checked={this.state.cameraChk}
              onCheck={this.cameraCheck}
            />
            <SelectField
              maxHeight={200}
              value={this.state.camera}
              onChange={this.cameraSelect}
            >
              {cameraItems}
            </SelectField>
            <CheckBox
              checkedIcon={<ActionFavorite />}
              uncheckedIcon={<ActionFavoriteBorder />}
              label="其他"
              //checked={this.state.cameraChk}
              onCheck={this.othersCheck}
            />
          </div>
          <div>
            <SelectField
              maxHeight={200}
              value={this.state.service}
              onChange={this.serviceSelect}
              floatingLabelText="服务内容"
              >
              {serviceItems}
            </SelectField>
          </div>
          <div>
            <TextField
              value={this.state.describe}
              onChange={this.describeChange}
              multiLine={true}
              rows={3}
              rowsMax={5}
              floatingLabelText="团队描述"
              />
          </div>
          <div style={styles.btn_wrapper}>
            <RaisedButton
              label="提交"
              primary={true}
              onTouchTap={this.submit}
              />
          </div>
        </form>
      </section>
    );
  }
}

export default Provider;
