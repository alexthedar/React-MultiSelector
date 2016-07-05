'use strict'
import update from 'react-addons-update'
import React, { Component } from 'react'
import Select from 'react-select';

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
