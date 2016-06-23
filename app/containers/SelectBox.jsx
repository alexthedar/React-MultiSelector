'use strict'

import React, { Component } from 'react'
import AllFilters from './AllFilters'

const data = require('../../mockaroodata')
// LOAD DATA Current in Temp
const jsonData = require('json!../../fakedata/FAKEDATA4.json');
let DATA = jsonData;
//end load data

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
      showFilters: (DATA[value].primary_filters) ? true : false,
      reportInfo: DATA[value]
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
                        >{option.report_name}
                      </option>
                    });
  }

  getAllFilters(){
    return <div className="well col-sm-8 col-sm-push-1">
            <button onClick={this.handleSubmit} className="btn btn-block btn-primary">Submit</button>
            <AllFilters handleSubmit={this.handleSubmit} reportInfo = {this.state.reportInfo} />
          </div>
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
