/**
 * Created by tww316 on 16/7/25.
 */
import React, { Component } from 'react';
import request from 'superagent';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const userTypes = [
  {key: 0, val: '服务商注册'},
  {key: 1, val: '用户注册'}
]

const typeItems = [];
userTypes.forEach(ut => {
  typeItems.push(<MenuItem key={ut.key} primaryText={`${ut.val}`}/>);
})

const styles = {
  register: {
    marginTop: '10rem'
  },
  h1: {
    fontSize: '2rem'
  }
}

class Demand extends Component {

  constructor(props) {
    super(props);

    // func bind
    this.emailChange = this.emailChange.bind(this);
    this.userTypeSelect = this.userTypeSelect.bind(this);
    this.register = this.register.bind(this);

    // default value
    this.state = {
      userType: 1,
      email: ''
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
        <h1 style={styles.h1}>Welcome!</h1>

        <div>
          <TextField
            value={this.state.email}
            onChange={this.emailChange}
            floatingLabelText="邮箱"
            />
        </div>
        <div>
          <SelectField
            value={this.state.userType}
            onChange={this.userTypeSelect}
            floatingLabelText="用户类型"
            >
            {typeItems}
          </SelectField>
        </div>
        <div>
          <RaisedButton
            label="注册"
            primary={true}
            onTouchTap={this.register}
            />
        </div>
      </section>
    );
  }
}

export default Demand;
