'use strict'
import {CheckBox, RadioButton, DropDown} from '../components/FilterWidgets'
import update from 'react-addons-update'
import React, { Component } from 'react'
import lodash from 'lodash'
// Mixin attempt

let WrapperEnhance = ComposedComponent => class extends Component{

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
    let val = e.target.name;
    let arr = this.state.valuesArray;
    lodash.includes(arr, val)? this.removeValue(arr, val): this.addValue(arr, val);
    console.log(this.state.valuesArray)
  }
  addValue(arr, val){
    let newArr = arr.concat([val]);
    this.setState({
      valuesArray: newArr
    })
  }
  removeValue(arr, val){
    let index = lodash.indexOf(arr, val);
    let newArr = update(arr, {$splice: [[index, 1]]})
    this.setState({
      valuesArray: newArr
    })
  }

  render(){
    return(
      <ComposedComponent
        { ...this.state}
        { ...this.props}
      />
    )
  }
}

class Checkboxes extends Component{

  render(){
    let checkboxes= getCheckOption(this)
    // let checkboxes= getCheckOption(this)
    return(
      <div>{checkboxes}</div>
    )
  }
}

export const CheckBoxWrapper = WrapperEnhance(Checkboxes)
