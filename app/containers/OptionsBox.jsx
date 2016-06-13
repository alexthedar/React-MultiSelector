"use strict";

import React, { Component } from 'react'
import {CheckBox, RadioButton, Dropdown, Datepick, TextInput } from '../components/FormWidgets'
import {Button, Col, Row} from 'react-bootstrap'

//fakedata
import {FAKEDATA, datalength, dataKeys, manKeys, schema, dataObjectArray} from '../components/data'

export default class  OptionsBox extends Component{
  constructor(props){
    super(props);
  }
    render(){
      var checkbox, radiobutton, dropdown, datestart, dateend, search, textinput;
      var filters = [];

      filters.push( <Button className="btn-block btn-primary">Submit</Button>)
      if(this.props.checkbox){
        filters.push(
          <CheckBox checkboxlabels={this.props.checkboxlabels}></CheckBox> )
      }

      if(this.props.radiobutton){
        filters.push( <RadioButton radiobuttonlabels={this.props.radiobuttonlabels}></RadioButton>)
      }

      if(this.props.dropdown){
        var t = this.props.dropdown
        filters.push( <Dropdown dropdownSelection={this.props.dropdownselection}></Dropdown>)
      }

      if(this.props.datestart){
        filters.push( <Datepick />)
      }

      if(this.props.dateend){
        filters.push( <Datepick />)
      }

      if(this.props.search){
        filters.push( <TextInput />)
      }

      if(this.props.textinput){
        filters.push( <TextInput />)
      }

      makeFilterColumns(filters){

      }

      console.log(filters)
    return(
      <div >
        {filters}
      </div>
    )
  }
}

// {checkbox}
// {radiobutton}
// {dropdown}
// {datestart}
// {dateend}
// {search}
// {textinput}
