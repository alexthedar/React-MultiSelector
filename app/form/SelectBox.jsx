'use strict'

import React, { Component } from 'react'
import FilterForm from './containers/FilterForm'
import _ from 'lodash'
import update from 'react-addons-update'
import hl7 from './utilities/FilterUtil'
import {buildReturnFilterObject} from './utilities/FilterUtil'

// LOAD DATA Current in Temp
const reportshl7 = require('json!../../fakedata/hl7filter.json');
const reportsJSON = require('json!../../fakedata/reportnames.json');
let FILTERDATA = reportshl7;
let DATA = reportsJSON;
// console.log(FILTERDATA)
//end load data

export default class SelectBox extends Component{
  constructor(){
    super();
    this.state = {
      reportId: '',
      primaryFilters:[],
      secondaryFilters:[],
      showFilters:'',
      submitted: null,
      returnObject:{}
    }
    this.dropdownSelect = this.dropdownSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    console.log('submitted')
    debugger
    // if (this.refs.reportFilterForm.isValid()) {
    //   this.setState({submitted: this.refs.reportFilterForm.getFormData()})
    // }
  }

  dropdownSelect(e){
    e.preventDefault();
    let value = e.currentTarget.value;
    this.setState({
      reportId: value ,
      primaryFilters: FILTERDATA.PrimaryFilters || [],
      secondaryFilters: FILTERDATA.SecondaryFilters || [],
      showFilters:true
    });
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

    return <div className="well col-sm-8 col-sm-push-1">
            <section>
              <button onClick={this.handleSubmit} className="btn btn-block btn-primary">Submit</button>
            </section>
            <br />
            <section>
              <FilterForm
                handleSubmit={this.handleSubmit}
                primaryFilters = {this.state.primaryFilters}
                secondaryFilters = {this.state.secondaryFilters}
                returnObject={this.state.returnObject}/>
            </section>
          </div>
  }

  render(){
    var allFilters;
    // buildReturnFilterObject(FILTERDATA);
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
                Additional Text:
              </small>
          </div>
        </div>
          {allFilters}
        </form>
        </div>
    )
  }
}




// {submitted}
//temporary
// if (this.state.submitted !== null) {
//   submitted = <div className="alert alert-success">
//     <p> data:</p>
//     <pre><code>{JSON.stringify(this.state.submitted, null, '  ')}</code></pre>
//   </div>
// }
//end temp
