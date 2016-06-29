'use strict'
import {CheckBox, RadioButton, DropDownMultiple} from '../components/FilterWidgets'
import update from 'react-addons-update'
import React, { Component } from 'react'
import _ from 'lodash'
import Select from 'react-select';
import DatePicker from 'react-bootstrap-date-picker'


export class CheckBoxWrapper extends Component{
  constructor(props){
    super(props);
    this.state={
      valuesArray: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.addValue = this.addValue.bind(this)
    this.removeValue = this.removeValue.bind(this)
  }

  handleChange(e){
    let val = e.target.value;
    let arr = this.state.valuesArray;
    _.includes(arr, val)? this.removeValue(arr, val): this.addValue(arr, val);
  }

  addValue(arr, val){
    let newArr = arr.concat([val]);
    this.setState({
      valuesArray: newArr
    })
  }

  removeValue(arr, val){
    let index = _.indexOf(arr, val);
    let newArr = update(arr, {$splice: [[index, 1]]})
    this.setState({
      valuesArray: newArr
    })
  }

  getCheckOption(){
    let options = this.props.filterInfo.options;
    return options.map((option, index) => {
      if(option.child){
        //go find filter
      }
      //need to include a disabled
      //do i need to label + key to make a more unique identifier
      return <CheckBox
                key={index}
                onChange={this.handleChange}
                label={option.label}
                value={option.label+index}
                checked={_.includes(this.state.valuesArray, option.label+index)}
              />
    });
  }

  render(){
    let checkboxes= this.getCheckOption()
    // debugger
    return(
      <div>{checkboxes}</div>
    )
  }
}

export class RadioButtonWrapper extends Component{
  constructor(props){
    super(props);
    this.state={
      returnValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    let val = e.target.value;
    var newVal = (this.state.returnValue === val)? '' : val;
    this.setState({
      returnValue: newVal
    })
  }

  getRadioOption(){
    let options = this.props.filterInfo.options;
    return options.map((option, index) => {
      if(option.child){
        //go find filter
      }
      //need to include a disabled
      return <RadioButton
                key={index}
                onChange={this.handleChange}
                label={option.label}
                value={option.label}
                checked={this.state.returnValue === option.label}
              />
    });
  }

  render(){
    let radiobuttons= this.getRadioOption()
    // console.log(this.state.returnValue)

    return(
      <div>{radiobuttons}</div>
    )
  }
}

export class DropDownWrapper extends Component{
  constructor(props){
    super(props);
    this.state={
      value:'',
      options: this.getDropdownOptions(),
      valuesArray:[]
    }
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }
  handleSelectChange (value) {
		this.setState({ value: value });
		this.setState({ valuesArray: [value] });
	}
  getDropdownOptions(){
    let options = this.props.filterInfo.options;
    return options.map((option, index) => {
      // if(option.child){
      // }
      return {value: option.label, label: option.label}
    });
  }
  render(){
    // console.log(this.state.valuesArray)
    return(
      <div>
        <Select
          simpleValue
          multi={this.props.filterInfo.multi}
          options={this.state.options}
          onChange={this.handleSelectChange}
          label={this.props.filterInfo.name}
          value={this.state.value}
          />
      </div>
    )
  }
}

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
// multi={this.props.filterInfo.multi}
// label={this.props.filterInfo.name}

// function getOptions(wrapper){
//   // debugger
//   var type = wrapper.constructor.displayName;
//
//   debugger
//   let options = wrapper.props.filterInfo.options;
//   var filterOptions =  options.map((option, index) => {
//     debugger
//     if(option.child){
//       //go find filter
//     }
//     //need to include a disabled
//     return <option></option>
//   });
//   return filterOptions
// }
