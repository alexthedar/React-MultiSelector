"use strict";

import React, { Component } from 'react'
import {Checkbox, Radio, FormGroup, FormControl, ControlLabel, HelpBlock, Form, Button, Col, InputGroup, Glyphicon, Row} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

export class RadioButton extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const radioButtons = [];
    if(this.props.radiobuttonlabels){
      var radiobuttonLabelArray = this.props.radiobuttonlabels.split(',');
      for(let i=0; i<radiobuttonLabelArray.length; i++){
        radioButtons.push(<Radio key={i}>{radiobuttonLabelArray[i]}</Radio>)
      }
    }
    return(
      <div>
        <ControlLabel>Label</ControlLabel>
          {radioButtons}
        <HelpBlock>Help</HelpBlock>
      </div>
    )
  }
}

export class CheckBox extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const checkBoxes = [];
    if(this.props.checkboxlabels){
      var checkboxLabelArray = this.props.checkboxlabels.split(',');
      for(let i=0; i<checkboxLabelArray.length; i++){
        checkBoxes.push(<Checkbox key={i}>{checkboxLabelArray[i]}</Checkbox>)
      }
    }
    return(
      <div>
        <ControlLabel>Label</ControlLabel>
          {checkBoxes}
        <HelpBlock>Help</HelpBlock>
      </div>
    )
  }
}

export class Dropdown extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const dropdownOptions = [];
    if(this.props.dropdownSelection){
      var dropdownSelectionArray = this.props.dropdownSelection.split(',');
      for(let i=0; i<dropdownSelectionArray.length; i++){
        dropdownOptions.push(<option key={i} value={dropdownSelectionArray[i]}>{dropdownSelectionArray[i]}</option>)
      }
    }
    return(
      <div>
        <ControlLabel>Label</ControlLabel>
        <FormControl componentClass="select" >
          {dropdownOptions}
        </FormControl>
        <HelpBlock>Help</HelpBlock>
      </div>
    )
  }
}

export class Datepick extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: new Date().toISOString()
    }
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(value) {
    // value is an ISO String.
    this.setState({
      value: value
    });
  }
  render(){
    return (
      <div>
        <ControlLabel>Label</ControlLabel>
        <DatePicker value={this.state.value} onChange={this.handleChange} />
        <HelpBlock>Help</HelpBlock>
    </div>
    )
  }
}

export class TextInput extends Component{
  render(){
    return(
      <div>
        <ControlLabel>Label</ControlLabel>
        <FormControl type="text" placeholder="Enter text"/>
        <HelpBlock>Help</HelpBlock>
      </div>
    )
  }
}
