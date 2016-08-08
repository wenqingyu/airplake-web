/**
 * Created by tww316 on 16/7/25.
 */
import React, { Component } from 'react';
import request from 'superagent';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import CheckBox from 'material-ui/Checkbox';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import baseStyle from '../assets/styles/base';
import config from '../consts/config';
import storage from '../utils/storage';

import citys from '../consts/city';
import {ranges, uavs, cameras, services} from '../consts/provider';

const cityItems = [];
citys.forEach(cm => {
  cityItems.push(<MenuItem value={cm.val} key={cm.key} primaryText={`${cm.val}`}/>);
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

class Vendor extends Component {
  constructor(props, context) {
    super(props, context);

    this.teamChange = this.teamChange.bind(this);
    this.mobileChange = this.mobileChange.bind(this);
    this.certificateChange = this.certificateChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.othersChange = this.othersChange.bind(this);

    this.citySelect = this.citySelect.bind(this);
    this.rangeSelect = this.rangeSelect.bind(this);
    this.uavSelect = this.uavSelect.bind(this);
    this.cameraSelect = this.cameraSelect.bind(this);
    this.serviceSelect = this.serviceSelect.bind(this);

    this.uavCheck = this.uavCheck.bind(this);
    this.cameraCheck = this.cameraCheck.bind(this);
    this.othersCheck = this.othersCheck.bind(this);

    this.submit = this.submit.bind(this);

    this.closeDialog = this.closeDialog.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);

    this.state = {
      team: '',
      mobile: '',
      certificate: '',
      email: '',
      city: null,
      range: null,
      uav: null,
      camera: null,
      others: '',
      uavChecked: false,
      cameraChecked: false,
      othersChecked: false,
      service: null,
      description: '',
      uavSelectVisible: {
        display: 'none'
      },
      cameraSelectVisible: {
        display: 'none'
      },
      othersInputVisible: {
        display: 'none'
      },
      dialog: {
        open: false,
        text: ''
      },
      snackBar: {
        open: false,
        message: '',
        autoHideDuration: 1000
      }
    };
  }

  teamChange(event) {
    this.setState({
      team: event.target.value
    })
  }

  mobileChange(event) {
    this.setState({
      mobile: event.target.value
    })
  }

  certificateChange(event) {
    this.setState({
      certificate: event.target.value
    })
  }

  descriptionChange(event) {
    this.setState({
      description: event.target.value
    })
  }

  othersChange(event) {
    this.setState({
      others: event.target.value
    })
  }

  citySelect(event, index, value) {
    this.setState({
      city: value
    });
  }

  rangeSelect(event, index, value) {
    this.setState({
      range: value
    });
  }

  uavSelect(event, index, value) {
    this.setState({
      uav: value
    });
  }

  cameraSelect(event, index, value) {
    this.setState({
      camera: value
    });
  }

  serviceSelect(event, index, value) {
    this.setState({
      service: value
    });
  }

  uavCheck(event, isInputChecked) {
    this.setState({
      uavChecked: isInputChecked
    })
    if (isInputChecked) {
      this.setState({
        uavSelectVisible: {display: 'inline-block'}
      })
    } else {
      this.setState({
        uav: null,
        uavSelectVisible: {display: 'none'}
      })
    }
  }

  cameraCheck(event, isInputChecked) {
    this.setState({
      cameraChecked: isInputChecked
    })
    if (isInputChecked) {
      this.setState({
        cameraSelectVisible: {display: 'inline-block'}
      })
    } else {
      this.setState({
        camera: null,
        cameraSelectVisible: {display: 'none'}
      })
    }
  }

  othersCheck(event, isInputChecked) {
    this.setState({
      othersChecked: isInputChecked
    })
    if (isInputChecked) {
      this.setState({
        othersInputVisible: {display: 'inline-block'}
      })
    } else {
      this.setState({
        others: '',
        othersInputVisible: {display: 'none'}
      })
    }
  }

  closeDialog() {
    this.setState({
      dialog: {
        open: false
      },
      registerDisabled: true
    });
  }

  closeSnackBar() {
    this.setState({
      snackBar: {
        open: false,
        message: ''
      }
    })
  }

  submit() {
    var params = {
      vendor: {
        teamname: this.state.team,
        tel: this.state.mobile,
        city: this.state.city,
        servicetime: this.state.range,
        equipment: [
          {type: '无人机', model: this.state.uav},
          {type: '相机', model: this.state.camera},
        ],
        servicetype: this.state.service,
        des: this.state.description
      },
      user: {
        idCard: this.state.certificate
      }
    };

    var token = storage.get('token');

    request
      .post(config.api + '/api/v1/vendors')
      .type('json')
      .set('x-token', token)
      .send(params)
      .then((res) => {
        if (res.status == 200) {
          let ret = res.body;
          if (ret.status == 'OK') {
            storage.set('token', res.header['x-token']);
            this.setState({
              dialog: {
                open: true,
                text: '服务商申请已提交成功，AIRPLAKE会尽快审核，请留意您的邮件，谢谢！'
              }
            })
          } else {
            this.setState({
              snackBar: {
                open: true,
                message: ret.error_msg
              }
            });
          }
        }
      }, (err) => {
        this.setState({
          snackBar: {
            open: true,
            message: '你的网络似乎不太好...'
          }
        });
      })
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
      <section className="provider">
        <Snackbar
          open={this.state.snackBar.open}
          message={this.state.snackBar.message}
          autoHideDuration={this.state.snackBar.autoHideDuration ? this.state.snackBar.autoHideDuration : 1500}
          onRequestClose={this.closeSnackBar}
          />
        <Dialog
          open={this.state.dialog.open}
          actions={closeDialogAction}
          children={this.state.dialog.text}
          onRequestClose={this.closeDialog}
          />

        <h1 style={baseStyle.title}>服务商信息完善</h1>

        <div>
          <TextField
            value={this.state.team}
            onChange={this.teamChange}
            floatingLabelText="团队名称"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div>
          <TextField
            value={this.state.mobile}
            onChange={this.mobileChange}
            floatingLabelText="手机号"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div>
          <TextField
            value={this.state.certificate}
            onChange={this.certificateChange}
            floatingLabelText="身份证号"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div>
          <SelectField
            maxHeight={200}
            value={this.state.city}
            onChange={this.citySelect}
            floatingLabelText="服务城市"
            floatingLabelStyle={baseStyle.selectFloatLabel}
            underlineFocusStyle={baseStyle.inputRequired}
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
            floatingLabelStyle={baseStyle.selectFloatLabel}
            underlineFocusStyle={baseStyle.inputRequired}
            >
            {rangeItems}
          </SelectField>
        </div>

        <div>
          <h2>现有装备</h2>
          <CheckBox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            label="无人机"
            checked={this.state.uavChecked}
            onCheck={this.uavCheck}
            />
          <SelectField
            maxHeight={200}
            value={this.state.uav}
            style={this.state.uavSelectVisible}
            onChange={this.uavSelect}
            underlineFocusStyle={baseStyle.inputRequired}
            >
            {uavItems}
          </SelectField>
          <CheckBox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            label="相机"
            checked={this.state.cameraChecked}
            onCheck={this.cameraCheck}
            />
          <SelectField
            maxHeight={200}
            value={this.state.camera}
            style={this.state.cameraSelectVisible}
            onChange={this.cameraSelect}
            underlineFocusStyle={baseStyle.inputRequired}
            >
            {cameraItems}
          </SelectField>
          <CheckBox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            label="其他"
            checked={this.state.othersChecked}
            onCheck={this.othersCheck}
            />
          <TextField
            value={this.state.others}
            style={this.state.othersInputVisible}
            onChange={this.othersChange}
            floatingLabelText="其他装备"
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div>
          <SelectField
            maxHeight={200}
            value={this.state.service}
            onChange={this.serviceSelect}
            floatingLabelText="服务类型"
            floatingLabelStyle={baseStyle.selectFloatLabel}
            underlineFocusStyle={baseStyle.inputRequired}
            >
            {serviceItems}
          </SelectField>
        </div>
        <div>
          <TextField
            value={this.state.description}
            onChange={this.descriptionChange}
            multiLine={true}
            rows={2}
            rowsMax={5}
            floatingLabelText="团队描述"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelStyle={baseStyle.textareaFloatLabel}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div style={baseStyle.btnWrapper}>
          <RaisedButton
            label="提交"
            secondary={true}
            onTouchTap={this.submit}
            />
        </div>
      </section>
    );
  }
}

export default Vendor;
