'use strict'
import {CheckBox, RadioButton, DropDown} from '../components/FilterWidgets'
import update from 'react-addons-update'
import React, { Component } from 'react'
import _ from 'lodash'


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
    console.log(this.state.valuesArray)
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
    (this.state.returnValue === val)? this.removeValue(val): this.addValue(val);
  }

  addValue(val){
    this.setState({
      returnValue: val
    })
  }

  removeValue(val){
    this.setState({
      returnValue: val
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
    return(
      <div>{radiobuttons}</div>
    )
  }
}

export class DropDownWrapper extends Component{
  constructor(props){
    super(props);
    this.state={
      value: ''
    }
  }
  getCheckOption(){
  }
  render(){
    let dropdown = this.getCheckOption()
    return(
      <div>DropDown</div>
    )
  }
}

function getOptions(wrapper){
  // debugger
  var type = wrapper.constructor.displayName;

  let options = wrapper.props.filterInfo.options;
  var t =  options.map((option, index) => {
    // debugger
    if(option.child){
      //go find filter
    }
    //need to include a disabled
    var y
    switch (type) {
      case 'CheckBoxWrapper':
      y =  <CheckBox
                key={index}
                onChange={wrapper.handleChange}
                label={option.label}
                value={option.label}
              />
              break;

      case 'RadioButtonWrapper':
      y =  <RadioButton
                key={index}
                onChange={wrapper.handleChange}
                label={option.label}
                value={option.label}
              />
              break;

      case 'DropDownWrapper':
      y =  <DropDown
                key={index}
                onChange={wrapper.handleChange}
                label={option.label}
                value={option.label}
              />
              break;

      default:
      break;
    }
    return y
  });
  return t
}
