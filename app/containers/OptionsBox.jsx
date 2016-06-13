"use strict";

import React, { Component } from 'react'
import {CheckBox, RadioButton, Dropdown, Datepick, TextInput } from '../components/FormWidgets'
import {Button, Col, Row} from 'react-bootstrap'

//fakedata
import {FAKEDATA, datalength, dataKeys, manKeys, schema, dataObjectArray} from '../components/data'

export default class  OptionsBox extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
    this.buildDisplay = this.buildDisplay.bind(this)
  }
  buildDisplay(filters){
      let columnWidth = Math.round(12/filters.length);
      if(columnWidth < 4){
        columnWidth = 4
      }
      const t =[]
      for(filter in filters){
        t.push(<Col md={columnWidth}>filter</Col>)
      }
  }

    render(){
      debugger;
      var checkbox, radiobutton, dropdown, datestart, dateend, search, textinput, columnWidth;
      var filters = [];

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

      const display = this.buildDisplay(filters)
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
