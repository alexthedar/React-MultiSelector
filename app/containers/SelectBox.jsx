'use strict'

import React, { Component } from 'react'
import OptionsBox from './OptionsBox'
// import {FormGroup, FormControl, ControlLabel, HelpBlock, Button, Form, Col, Row} from 'react-bootstrap'
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
        >{option.report}
      </option>
    });

    if(this.state.showFilters === true) {

      submitButton = <button onClick={this.handleSubmit} className="btn-block btn-primary">Submit</button>
      filterBox = <div className="well col-sm-4 col-sm-push-1">
                      <OptionsBox reportInfo = {this.state.reportInfo} ref="reportFilterForm" />
                  </div>
    } else {
      submitButton = ''
      filterBox = ''
      filterBoxLabel = ''
    }
    return(
        <div>
        <form>
          <div className="col-sm-4">
          <div className="row">
            <label className="col-sm-8" for="reportSelect">Reports Label</label>
                <select id="reportSelect" className="form-control" placeholder="Select Report"  onChange={this.dropdownSelect}>{options}
                </select>
          </div>
          <div className="row">
              <small className="text-muted">
                Additional Text: {this.state.showFilters.toString()}
              </small>
          </div>
          <div className="row">
            {submitButton}
          </div>
        </div>
          {filterBox}
        </form>
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
