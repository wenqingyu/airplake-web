/**
 * Created by tww316 on 16/7/25.
 */
import React, { Component } from 'react';
import request from 'superagent';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';

import config from '../const/config';
import citys from '../const/citys';

// load citys
const cityItems = [];
citys.forEach(cm => {
  cityItems.push(<MenuItem value={cm.name} key={cm.code} primaryText={`${cm.name}`}/>);
});

const styles = {
  register: {
    marginTop: '10rem'
  },
  h1: {
    fontSize: '2rem'
  }
}

class Demand extends Component {

  constructor(props, context) {
    super(props, context);

    // func bind
    this.emailChange = this.emailChange.bind(this);
    this.userTypeSelect = this.userTypeSelect.bind(this);
    this.register = this.register.bind(this);

    // default value
    this.state = {
      startDate: null,
      endDate: null,
    }
  }

  // set email
  emailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  // select userType
  userTypeSelect(event, index, value) {
    this.setState({
      userType: value
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


  // register submit
  register() {
    var email = this.state.email,
      userType = this.state.userType;

    console.log(email);
    console.log(userType);

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
      <section style={styles.register}>
        <h1 style={styles.h1}>无人机需求发布</h1>

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
            floatingLabelText="服务描述"
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
          <TextField
            value={this.state.serviceType}
            onChange={this.serviceTypeChange}
            floatingLabelText="服务类型"
            />
        </div>
        <div>
          <RaisedButton
            label="注册"
            primary={true}
            onTouchTap={this.register}
            />
        </div>
        <div>
          <DatePicker
            floatingLabelText="服务开始时间"
            autoOk={true}
            value={this.state.startDate}
            onChange={this.startDateChange}
            />
        </div>
        <div>
          <DatePicker
            floatingLabelText="服务结束时间"
            autoOk={true}
            value={this.state.endDate}
            onChange={this.endDateChange}
            />
        </div>
      </section>
    );
  }
}

export default Demand;
