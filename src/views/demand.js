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

import baseStyle from '../assets/styles/base';
import config from '../consts/config';
import citys from '../consts/city';

const cityItems = [];
citys.forEach(cm => {
  cityItems.push(<MenuItem value={cm.name} key={cm.code} primaryText={`${cm.name}`}/>);
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

    this.state = {
      title: '',
      description: '',
      city: '004',
      serviceType: '',
      startDate: null,
      endDate: null,
      minBudget: '',
      maxBudget: '',
      location: ''
    }
  }

  titleChange(event) {
    this.setState({
      email: event.target.value
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

  create() {
    var params = {
      title: this.state.title,
      des: this.state.description,
      city: this.state.city,
      servicetype: this.state.serviceType,
      starttime: this.state.startDate,
      endtime: this.state.endDate,
      min: this.state.minBudget,
      max: this.state.maxBudget,
      location: this.state.location
    };

    request
      .post('/api/v1/users/verification')
      .send({
        email: email,
        type: userType
      })
      .end((err, res) => {
        if (res.code == 200) {
          console.log('register success');
        }
      })
  }

  render() {
    return (
      <section>
        <h1 style={baseStyle.title}>无人机需求发布</h1>

        <div>
          <TextField
            value={this.state.title}
            onChange={this.titleChange}
            floatingLabelText="服务标题"
            />
        </div>
        <div>
          <TextField
            value={this.state.description}
            onChange={this.descriptionChange}
            multiLine={true}
            rows={3}
            rowsMax={5}
            floatingLabelText="服务描述"
            />
        </div>
        <div>
          <SelectField
            maxHeight={200}
            value={this.state.city}
            onChange={this.citySelect}
            floatingLabelText="服务城市"
            >
            {cityItems}
          </SelectField>
        </div>
        <div>
          <TextField
            value={this.state.serviceType}
            onChange={this.serviceTypeChange}
            floatingLabelText="服务类型"
            />
        </div>
        <div>
          <DatePicker
            autoOk={true}
            value={this.state.startDate}
            onChange={this.startDateChange}
            floatingLabelText="服务开始日期"
            />
        </div>
        <div>
          <DatePicker
            autoOk={true}
            value={this.state.endDate}
            onChange={this.endDateChange}
            floatingLabelText="服务结束日期"
            />
        </div>
        <div>
          <TextField
            value={this.state.minBudget}
            onChange={this.minBudgetChange}
            floatingLabelText="最小预算"
            />
        </div>
        <div>
          <TextField
            value={this.state.maxBudget}
            onChange={this.maxBudgetChange}
            floatingLabelText="最大预算"
            />
        </div>
        <div>
          <TextField
            value={this.state.location}
            onChange={this.locationChange}
            multiLine={true}
            rows={3}
            rowsMax={5}
            floatingLabelText="服务位置"
            />
        </div>
        <div style={baseStyle.btnWrapper}>
          <RaisedButton
            label="创建任务"
            secondary={true}
            onTouchTap={this.create}
            />
        </div>
      </section>
    );
  }
}

export default Demand;
