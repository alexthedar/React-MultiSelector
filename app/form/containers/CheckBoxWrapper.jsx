'use strict'
import {CheckBox} from '../components/CheckBox'
import update from 'react-addons-update'
import React, { Component } from 'react'
import lodash from 'lodash'


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
    lodash.includes(arr, val)? this.removeValue(arr, val): this.addValue(arr, val);
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
                checked={lodash.includes(this.state.valuesArray, option.label+index)}
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
