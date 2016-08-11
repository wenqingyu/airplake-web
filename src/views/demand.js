/**
 * Created by tww316 on 16/7/25.
 */
import React, { Component } from 'react';
import request from 'superagent';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';

import baseStyle from '../assets/styles/base';
import config from '../consts/config';
import storage from '../utils/storage';
import format from '../utils/format';

import citys from '../consts/city';

const cityItems = [];
citys.forEach(cm => {
  cityItems.push(<MenuItem value={cm.val} key={cm.key} primaryText={`${cm.val}`}/>);
});

class Demand extends Component {

  constructor(props, context) {
    super(props, context);

    this.titleChange = this.titleChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.citySelect = this.citySelect.bind(this);
    this.serviceTypeChange = this.serviceTypeChange.bind(this);
    this.startDateChange = this.startDateChange.bind(this);
    this.endDateChange = this.endDateChange.bind(this);
    this.minBudgetChange = this.minBudgetChange.bind(this);
    this.maxBudgetChange = this.maxBudgetChange.bind(this);
    this.locationChange = this.locationChange.bind(this);

    this.create = this.create.bind(this);

    this.closeDialog = this.closeDialog.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);

    this.state = {
      title: '',
      description: '',
      city: null,
      serviceType: '',
      startDate: null,
      endDate: null,
      minBudget: '',
      maxBudget: '',
      location: '',
      dialog: {
        open: false,
        text: ''
      },
      snackBar: {
        open: false,
        message: '',
        autoHideDuration: 1000
      }
    }
  }

  titleChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  descriptionChange(event) {
    this.setState({
      description: event.target.value
    })
  }

  citySelect(event, index, value) {
    this.setState({
      city: value
    });
  }

  serviceTypeChange(event) {
    this.setState({
      serviceType: event.target.value
    })
  }

  startDateChange(event, date) {
    this.setState({
      startDate: date
    });
  }

  endDateChange(event, date) {
    this.setState({
      endDate: date
    });
  }

  minBudgetChange(event) {
    this.setState({
      minBudget: event.target.value
    });
  }

  maxBudgetChange(event) {
    this.setState({
      maxBudget: event.target.value
    });
  }

  locationChange(event) {
    this.setState({
      location: event.target.value
    });
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

  create() {
    var start = format.normal(this.state.startDate);
    var end = format.normal(this.state.endDate);
    var params = {
      title: this.state.title,
      des: this.state.description,
      city: this.state.city,
      servicetype: this.state.serviceType,
      starttime: start,
      endtime: end,
      min: this.state.minBudget,
      max: this.state.maxBudget,
      location: this.state.location
    };

    var token = storage.get('token');

    request
      .post(config.api + '/api/v1/jobs')
      .type('json')
      .set('x-token', token)
      .send(params)
      .then((res) => {
        if (res.status == 200) {
          let ret = res.body;
          if (ret.status == 'OK') {
            this.setState({
              dialog: {
                open: true,
                text: '任务创建成功'
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
        console.log(err);
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
      <section>
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

        <h1 style={baseStyle.title}>无人机需求发布</h1>

        <div>
          <TextField
            value={this.state.title}
            onChange={this.titleChange}
            floatingLabelText="服务标题"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div>
          <TextField
            value={this.state.description}
            onChange={this.descriptionChange}
            multiLine={true}
            rowsMax={4}
            floatingLabelText="服务描述"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelStyle={baseStyle.textareaFloatLabel}
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
          <TextField
            value={this.state.serviceType}
            onChange={this.serviceTypeChange}
            floatingLabelText="服务类型"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div>
          <DatePicker
            autoOk={true}
            value={this.state.startDate}
            onChange={this.startDateChange}
            floatingLabelText="服务开始日期"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div>
          <DatePicker
            autoOk={true}
            value={this.state.endDate}
            onChange={this.endDateChange}
            floatingLabelText="服务结束日期"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div>
          <TextField
            value={this.state.minBudget}
            onChange={this.minBudgetChange}
            floatingLabelText="最小预算"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div>
          <TextField
            value={this.state.maxBudget}
            onChange={this.maxBudgetChange}
            floatingLabelText="最大预算"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div>
          <TextField
            value={this.state.location}
            onChange={this.locationChange}
            multiLine={true}
            rowsMax={4}
            floatingLabelText="服务位置"
            underlineFocusStyle={baseStyle.inputRequired}
            floatingLabelStyle={baseStyle.textareaFloatLabel}
            floatingLabelFocusStyle={baseStyle.baseColor}
            />
        </div>
        <div style={baseStyle.btnWrapper}>
          <RaisedButton
            label="创建"
            secondary={true}
            onTouchTap={this.create}
            />
        </div>
      </section>
    );
  }
}

export default Demand;
