'use strict'

import React, { Component } from 'react'
import OptionsBox from './OptionsBox'
import {FormGroup, FormControl, ControlLabel, HelpBlock, Button, Form, Col, Row} from 'react-bootstrap'
const jsonData = require('json!../../fakedata/FAKEDATA3.json');
let TEMPDATA = jsonData;

//fakedata functions and info
// import{ dataObjectArray } from '../devtemp/data'
// let DATA = dataObjectArray;
// console.log(TEMPDATA)

export default class SelectBox extends Component{
  constructor(){
    super();
    this.state = {
      reportId: '',
      reportInfo:'',
      showFilters:'',
      submitted: null
    }
    this.dropdownSelect = this.dropdownSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  dropdownSelect(e){
    e.preventDefault();
    let value = e.currentTarget.value;
    this.setState({
      reportId: value ,
      showFilters: (TEMPDATA[value].filters) ? true : false,
      reportInfo: TEMPDATA[value]
    });
    console.log(this.state.showFilters)
  }

  handleSubmit() {
    if (this.refs.reportFilterForm.isValid()) {
      this.setState({submitted: this.refs.reportFilterForm.getFormData()})
    }
  }

  render(){
    var submitted, submitButton, filterBox, filterBoxLabel;
    if (this.state.submitted !== null) {
      submitted = <div className="alert alert-success">
        <p> data:</p>
        <pre><code>{JSON.stringify(this.state.submitted, null, '  ')}</code></pre>
      </div>
    }

    let options = TEMPDATA.map(option => {
      var props = { ...option}
      return  <option
        key={option.id}
        value={option.id}
        >{option.id} - {option.report}
      </option>
    });

    if(this.state.showFilters === true) {
      
      submitButton = <Button onClick={this.handleSubmit} className="btn-block btn-primary">Submit</Button>
      filterBox = <Col className="well" smPush={1} sm={8}>
                      <OptionsBox reportInfo = {this.state.reportInfo} ref="reportFilterForm" />
                  </Col>
    } else {
      submitButton = ''
      filterBox = ''
      filterBoxLabel = ''
    }
    return(
        <div>
        <Form horizontal>
          <Col sm={4}>
          <Row>
            <ControlLabel sm={8}>Reports Label</ControlLabel>
                <FormControl componentClass="select" placeholder="Select Report"  onChange={this.dropdownSelect}>{options}
                </FormControl>
          </Row>
          <Row>
              <HelpBlock>
                Additional Text: {this.state.showFilters.toString()}
              </HelpBlock>
          </Row>
          <Row>
            {submitButton}
          </Row>
          </Col>
          {filterBox}
        </Form>
        {submitted}
        </div>
    )
  }
}

function boolConvert(data){
  let isTrue = (data === "true");
  return isTrue;
}
















// {/*<FormGroup>*/}
// {/*<Col sm={2}><label className="control-label"></label></Col>*/}
// {/*<Row>*/}
// {/*<label  className="col-sm-3 control-label">Filters</label>*/}
// {/*</Row>*/}
// {/*<ControlLabel>Label for Dropdown</ControlLabel>*/}

// {/*</FormGroup>*/}
