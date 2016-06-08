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
        {radioButtons}
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
        {checkBoxes}
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
    if(this.props.dropdownselection){
      var dropdownSelectionArray = this.props.dropdownselection.split(',');
      for(let i=0; i<dropdownSelectionArray.length; i++){
        dropdownOptions.push(<option key={i} value={dropdownSelectionArray[i]}>{dropdownSelectionArray[i]}</option>)
      }
    }

    return(
      <div>
        <FormControl componentClass="select" >
          {dropdownOptions}
        </FormControl>
      </div>
    )
  }
}

export class Datepick extends Component{
  render(){
    return(
      <div>
        <DatePicker  />
      </div>
    )
  }
}

export class TextInput extends Component{
  render(){
    return(
      <div>
        <FormControl
          type="text"
          placeholder="Enter text"
          />
      </div>
    )
  }
}
