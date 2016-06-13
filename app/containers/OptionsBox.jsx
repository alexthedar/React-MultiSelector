"use strict";

import React, { Component } from 'react'
import {CheckBox, RadioButton, Dropdown, Datepick, TextInput } from '../components/FormWidgets'
import {Button, Col, Row} from 'react-bootstrap'

export default class  OptionsBox extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
    this.buildDisplay = this.buildDisplay.bind(this)
  }

  buildDisplay(reportInfo){
    var arr = []
    if(reportInfo.checkbox){
      arr.push(reportInfo.checkboxLabels)
    }
    if(reportInfo.radiobutton){
      arr.push(reportInfo.radiobuttonLabels)
    }
    if(reportInfo.dropdown){
      arr.push(reportInfo.dropdownSelect)
    }
    if(reportInfo.search){
      arr.push(reportInfo.search)
    }
    if(reportInfo.textinput){
      arr.push(reportInfo.textinput)
    }
    let columnWidth = Math.round(12/arr.length);
    if(columnWidth < 4){
      columnWidth = 4
    }
    const row = <Row>{columns}</Row>
    const columns = [];
    for(let i=0; i < arr.length; i++){
      columns.push(<Col md={columnWidth} className="text-center">filter</Col>)
    }
    return row
  }

  render(){
    let reportInfo = this.props.reportInfo;
    const filtersInColumns = this.buildDisplay(reportInfo)

    console.log('option')
    console.log(filtersInColumns)
    return(
      <div >
        {filtersInColumns}
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
