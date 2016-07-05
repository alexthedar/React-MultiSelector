'use strict'

import React, { Component } from 'react'
import AllFilters from './containers/AllFilters'
import _ from 'lodash'
import update from 'react-addons-update'
import hl7 from './utilities/FilterUtil'

// LOAD DATA Current in Temp
const reportshl7 = require('json!../../fakedata/hl7filter.json');
const reportsJSON = require('json!../../fakedata/reportnames.json');
let FILTERDATA = reportshl7;
let DATA = reportsJSON;
console.log(DATA)
//end load data

export default class SelectBox extends Component{
  constructor(){
    super();
    this.state = {
      reportId: '',
      reportInfo:'',
      showFilters:'',
      submitted: null,
      selectedArray:[]
    }
    this.dropdownSelect = this.dropdownSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  dropdownSelect(e){
    e.preventDefault();
    debugger;
    let value = e.currentTarget.value;
    this.setState({
      reportId: value ,
      primaryFilters: FILTERDATA.PrimaryFilters,
      secondaryFilters: FILTERDATA.PrimaryFilters

      // showFilters: (DATA[value].primary_filters) ? true : false,
      // reportInfo: DATA[value]
    });
  }



  handleSubmit() {
    if (this.refs.reportFilterForm.isValid()) {
      this.setState({submitted: this.refs.reportFilterForm.getFormData()})
    }
  }

  getOptions(data){
    //need id to find filters
    return data.map((option, index) => {
                      var props = { ...option}
                      return  <option
                        key={index}
                        value={index}
                        >{option.Name}
                      </option>
                    });
  }

  getAllFilters(){
    var t = <div className="well col-sm-8 col-sm-push-1">
            <section>
              <button onClick={this.handleSubmit} className="btn btn-block btn-primary">Submit</button>
            </section>
            <br />
            <section>
              <AllFilters
                handleSubmit={this.handleSubmit}
                reportInfo = {this.state.reportInfo}
                selectionValues={this.state.selectionValues}
                onChange={this.handleChange}/>
            </section>
          </div>
          // debugger
          return t
  }

  render(){
    //temporary
    if (this.state.submitted !== null) {
      submitted = <div className="alert alert-success">
        <p> data:</p>
        <pre><code>{JSON.stringify(this.state.submitted, null, '  ')}</code></pre>
      </div>
    }
    //end temp

    var submitted, allFilters;
    let options = this.getOptions(DATA);
    allFilters = this.state.showFilters ? this.getAllFilters() : '';

    return(
        <div>
        <form>
          <div className="col-sm-4">
          <div className="row">
            <label htmlFor="reportSelect">Reports Label</label>
                <select id="reportSelect" className="form-control" placeholder="Select Report"  onChange={this.dropdownSelect}>{options}
                </select>
          </div>
          <div className="row">
              <small className="text-muted">
                Additional Text: {this.state.showFilters.toString()}
              </small>
          </div>
        </div>
          {allFilters}
        </form>
        {submitted}
        </div>
    )
  }
}

//convert string to bool
function boolConvert(data){
  let isTrue = (data === 'true');
  return isTrue;
}
