'use strict'
import {CheckBox, RadioButton, DropDown} from '../components/FilterWidgets'
import update from 'react-addons-update'
import React, { Component } from 'react'


export class CheckBoxWrapper extends Component{
  constructor(props){
    super(props);
    this.state={
      isChecked: false,
      valuesArray: []
    }
    this.handleChange = this.handleChange.bind(this)
  }
  isInValuesArray(){

  }
  handleChange(e){

  }
  updateCheckbox(e){
    this.setState({
      isChecked: !this.state.isChecked,
      valuesArray: this.state.valuesArray.concat(e.target.value)
    })
  }
  getCheckOption(){
    var options = this.props.filterInfo.options;
    var t = options.map((option, index) => {
      var props = { ...option}
      if(option.child){
        //go find filter
      }
      var r = <CheckBox key={index} onChange={this.handleChange} checked={this.isInValuesArray}>{option.label}</CheckBox>
      debugger
      return r
    });
    console.log(t)
    return t
  }
  render(){
    let checkboxes=this.getCheckOption()
    // console.log(checkboxes)
    return(
      <div>{checkboxes}></div>
    )
  }
}

export class RadioButtonWrapper extends Component{
  constructor(props){
    super(props);
    this.state={
      value: ''
    }
  }
  getCheckOption(){
  }
  render(){
    let checkboxes=this.getCheckOption()
    return(
      <div>{checkboxes}></div>
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
    let checkboxes=this.getCheckOption()
    return(
      <div>{checkboxes}></div>
    )
  }
}
