"use strict";

import React, { Component } from 'react'
import OptionsBox from './OptionsBox'
import {FormGroup, FormControl, ControlLabel, HelpBlock, Button, Form, Col, Row} from 'react-bootstrap'

//fakedata functions and info
import{ dataObjectArray } from '../components/data'
let DATA = dataObjectArray;

export default class SelectBox extends Component{
  constructor(){
    super();
    this.state = {
      reportId: '',
      reportInfo:'',
      showFilters:''
    }
    this.dropdownSelect = this.dropdownSelect.bind(this)
  }
  dropdownSelect(e){
    e.preventDefault();
    let value = e.currentTarget.value;
    this.setState({
      reportId: value ,
      showFilters: DATA[value].props.filter,
      reportInfo: DATA[value].props
    });
  }

  render(){

    let options = dataObjectArray.map(option => {
      var props = { ...option.props}
      return  <option
                key={option.props.id}
                value={option.props.id}
              >{option.props.id} - {option.props.report}
              </option>
    });
    return(
        <div>
        <Form horizontal>
          <Row>
            <Col sm={12}>
              <ControlLabel>Label for Dropdown</ControlLabel>
            </Col>
            <Col sm={12} md={12}>
                <FormControl componentClass="select" placeholder="Select Report"  onChange={this.dropdownSelect}>{options}
                </FormControl>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <HelpBlock>
                Grey text: {this.state.showFilters.toString()}
              </HelpBlock>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              {(this.state.showFilters === true) ? <div><Button className="btn-block btn-primary">Submit</Button>
                  <OptionsBox reportInfo = {this.state.reportInfo}  />
                </div> : ''}
            </Col>
          </Row>
        </Form>
        </div>
    )
  }
}

function boolConvert(data){
  let isTrue = (data === "true");
  return isTrue;
}
























// {(this.state.showFilters === true)?
//   <div ><Button className="btn-block btn-primary">Submit</Button>
//   <OptionsBox
//     activeSelect={this.state.activeSelect}
//     filter={this.state.filter}
//     report={this.state.report}
//     checkbox={this.state.checkbox}
//     checkboxlabels={this.state.checkboxlabels}
//     radiobutton={this.state.radiobutton}
//     radiobuttonlabels={this.state.radiobuttonlabels}
//     dropdown={this.state.dropdown}
//     dropdownselection={this.state.dropdownselection}
//     datestart={this.state.datestart}
//     dateend={this.state.dateend}
//     search={this.state.search}
//     textinput={this.state.textinput}
//     />
// </div> : ''}
