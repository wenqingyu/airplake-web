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
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import config from '../const/config';
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
  cityItems.push(<MenuItem value={cm.name} key={cm.code} primaryText={`${cm.name}`}/>);
});

const rangeItems = [];
ranges.forEach(r => {
  rangeItems.push(<MenuItem value={r.val} key={r.key} primaryText={`${r.val}`}/>)
})

const uavItems = [];
uavs.forEach(u => {
  uavItems.push(<MenuItem value={u.val} key={u.key} primaryText={`${u.val}`}/>)
})

const cameraItems = [];
cameras.forEach(c => {
  cameraItems.push(<MenuItem value={c.val} key={c.key} primaryText={`${c.val}`}/>)
})

const serviceItems = [];
services.forEach(s => {
  serviceItems.push(<MenuItem value={s.val} key={s.key} primaryText={s.val}/>)
})

class Provider extends Component {
  constructor(props, context) {
    super(props, context);

    this.teamChange = this.teamChange.bind(this);
    this.mobileChange = this.mobileChange.bind(this);
    this.wechatChange = this.wechatChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);

    this.citySelect = this.citySelect.bind(this);
    this.rangeSelect = this.rangeSelect.bind(this);
    this.uavSelect = this.uavSelect.bind(this);
    this.cameraSelect = this.cameraSelect.bind(this);
    this.serviceSelect = this.serviceSelect.bind(this);

    this.uavCheck = this.uavCheck.bind(this);
    this.cameraCheck = this.cameraCheck.bind(this);
    this.othersCheck = this.othersCheck.bind(this);

    this.publish = this.publish.bind(this);

    this.state = {
      team: '',
      mobile: '',
      wechat: '',
      email: '',
      city: '004',
      description: '',
      range: 0,
      uav: 0,
      camera: 0,
      service: 0,
      dialogOpen: false
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

  // set description
  descriptionChange(event) {
    this.setState({
      description: event.target.value
    })
  }

  // city select
  citySelect(event, index, value) {
    this.setState({
      city: value
    });
  }

  // range select
  rangeSelect(event, index, value) {
    this.setState({
      range: value
    });
  }

  // uav select
  uavSelect(event, index, value) {
    this.setState({
      uav: value
    });
  }

  // camera select
  cameraSelect(event, index, value) {
    this.setState({
      camera: value
    });
  }

  // service select
  serviceSelect(event, index, value) {
    this.setState({
      service: value
    });
  }

  // uav check
  uavCheck(event, isInputChecked) {
  }

  // camera check
  cameraCheck(event, isInputChecked) {
  }

  // others check
  othersCheck(event, isInputChecked) {
  }

  // publish submit
  publish() {
    var params = {
      team: this.state.team,
      tel: this.state.mobile,
      wechant: this.state.wechat,
      email: this.state.email,
      city: this.state.city,
      servicetime: this.state.range,
      equipment: [
        {type: '无人机', model: this.state.uav},
        {type: '相机', model: this.state.camera},
      ],
      servicetype: this.state.service,
      des: this.state.describe
    };

    var token = this.props.location.query.token;

    request
      .post(config.api + '/api/v1/users/' + token)
      .set('Content-Type', 'application/json')
      .send({vendor: params})
      .end((err, res) => {
        if (res.code == 200) {
          this.setState({
            dialogOpen: true
          });
        }
      })
  }

  // dialog close
  closeDialog() {
    this.setState({
      dialogOpen: false
    });
  }

  render() {
    const closeDialogAction = (
      <FlatButton
        label="好的"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.closeDialog}
        />
    );

    return (
      <section className="provider">
        <Dialog
          open={this.state.dialogOpen}
          actions={closeDialogAction}
          onRequestClose={this.closeDialog}
          >
          服务发布成功
        </Dialog>

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
            floatingLabelText="邮箱"
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
            value={this.state.description}
            onChange={this.descriptionChange}
            multiLine={true}
            rows={3}
            rowsMax={5}
            floatingLabelText="团队描述"
            />
        </div>
        <div style={styles.btn_wrapper}>
          <RaisedButton
            label="发布"
            primary={true}
            onTouchTap={this.publish}
            />
        </div>
      </section>
    );
  }
}

export default Provider;
