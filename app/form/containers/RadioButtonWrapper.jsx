'use strict'
import {RadioButton} from '../components/RadioButton'
import update from 'react-addons-update'
import React, { Component } from 'react'

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
