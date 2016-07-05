'use strict'
import update from 'react-addons-update'
import React, { Component } from 'react'
import DatePicker from 'react-bootstrap-date-picker'


export class DateWrapper extends Component{

  constructor(props){
    super(props);
    this.state={
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(value) {
    // value is an ISO String.
    this.setState({
      value: value
    });
  }
  render(){
    // console.log(this.state.valuesArray)
    return(
      <div>
        <DatePicker
          value={this.state.value}
          onChange={this.handleChange}
          />
      </div>
    )
  }
}
