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
    this.isInValuesArray = this.isInValuesArray.bind(this)
    this.addValue = this.addValue.bind(this)
    this.removeValue = this.removeValue.bind(this)
  }
  isInValuesArray(e){
    return _.includes(this.state.valuesArray, e.target.value)
  }
  handleChange(e){
    e.preventDefault();
    let val = e.target.value;
    let arr = this.state.valuesArray;
    _.includes(this.state.valuesArray, val)? this.removeValue(val, arr): this.addValue(val, arr);
  }
  addValue(val, arr){
    this.setState({
      valuesArray: this.state.arr.concat([val])
    })
    console.log(this.state.valuesArray)
  }
  removeValue(val, arr){
    let index = _.indexOf(arr, val);
    this.setState({
      valuesArray: update(this.state.data, {$splice: [[index, 1]]})
    })
    console.log(this.state.valuesArray)
  }
  getCheckOption(){
    let options = this.props.filterInfo.options;
    let t = options.map((option, index) => {
      if(option.child){
        //go find filter
      }
      //need to include a disabled
      let r = <CheckBox
                key={index}
                onChange={this.handleChange}
                label={option.label}
                checked={this.isInValuesArray}
                value={option.label}
              />
      return r
    });
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
