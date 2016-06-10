"use strict";

import React, { Component } from 'react'
import OptionsBox from './OptionsBox'
import {FormGroup, FormControl, ControlLabel, HelpBlock, Button, Form, Col, Row} from 'react-bootstrap'

//fakedata functions and info
import {FAKEDATA, datalength, dataKeys, manKeys, schema, dataObjectArray} from '../components/data'


export default class SelectBox extends Component{
  constructor(){
    super();
    this.state = {
      showFilters: '',
      activeSelect: '',
      checkbox: '',
      checkboxlabels: '',
      radiobutton: '',
      radiobuttonlabels: '',
      dropdown: '',
      dropdownselection: '',
      datestart: '',
      dateend: '',
      search: '',
      textinput: ''
    }
    this.dropdownSelect = this.dropdownSelect.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleChange.bind(this)
  }
  dropdownSelect(e){
    e.preventDefault();
    let value = e.currentTarget.value;
    const dataset = e.target.options[e.target.selectedIndex].dataset;

    //retrieve states from option
    let filter = boolConvert(dataset.filter);
    let report = dataset.report;
    let checkbox = boolConvert(dataset.checkbox);
    let checkboxlabels = dataset.checkboxlabels;
    let radiobutton = boolConvert(dataset.radiobutton);
    let radiobuttonlabels = dataset.radiobuttonlabels;
    let dropdown = boolConvert(dataset.dropdown);
    let dropdownselection = dataset.dropdownselection;
    let datestart = boolConvert(dataset.datestart);
    let dateend = boolConvert(dataset.dateend);
    let search = boolConvert(dataset.search);
    let textinput = boolConvert(dataset.textinput);


    // set states
    this.setState({ showFilters: filter,
                    activeSelect: value,
                    report: report,
                    filter: filter,
                    checkbox: checkbox,
                    checkboxlabels: checkboxlabels,
                    radiobutton: radiobutton,
                    radiobuttonlabels: radiobuttonlabels,
                    dropdown: dropdown,
                    dropdownselection: dropdownselection,
                    datestart: datestart,
                    dateend: dateend,
                    search: search,
                    textinput: textinput
                  });
  }

  handleChange (field, e) {
    var nextState = {}
    nextState[field] = e.target.checked
    this.setState(nextState)
  }

  handleSubmit () {
    if (this.refs.contactForm.isValid()) {
      this.setState({submitted: this.refs.contactForm.getFormData()})
    }
  }

  render(){

    //iterate over dataobjects to set options in selection
    let options = dataObjectArray.map(option => {
      var props = { ...option.props}
      return <option
        key={option.props.id}
        value={option.props.id}
        data-filter={option.props.filter}
        data-report={option.props.report}
        data-checkbox={option.props.checkbox}
        data-checkboxLabels={option.props.checkboxLabels}
        data-radiobutton={option.props.radiobutton}
        data-radiobuttonLabels={option.props.radiobuttonLabels}
        data-dropdown={option.props.dropdown}
        data-dropdownSelection={option.props.dropdownSelection}
        data-dateStart={option.props.dateStart}
        data-dateEnd={option.props.dateEnd}
        data-search={option.props.search}
        data-textinput={option.props.textinput}
        >{option.props.id} - {option.props.report} - {option.props.filter.toString()}
      </option>
    });

    return(

        <Form horizontal>
          <Row>
            <Col sm={12}>
              <ControlLabel>Label for Dropdown</ControlLabel>
            </Col>
            <Col sm={12} md={10}>
                <FormControl componentClass="select" placeholder="Select Report" onChange={this.dropdownSelect}>{options}
                </FormControl>
            </Col>
            <Col sm={12} md={2}>
              <Button type="button" block>Submit</Button>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <HelpBlock>Grey text: {this.state.activeSelect} - {this.state.showFilters.toString()}</HelpBlock>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              {(this.state.showFilters === true)?
                <div className="well"><OptionsBox

                                        activeSelect={this.state.activeSelect}
                                        filter={this.state.filter}
                                        report={this.state.report}
                                        checkbox={this.state.checkbox}
                                        checkboxlabels={this.state.checkboxlabels}
                                        radiobutton={this.state.radiobutton}
                                        radiobuttonlabels={this.state.radiobuttonlabels}
                                        dropdown={this.state.dropdown}
                                        dropdownselection={this.state.dropdownselection}
                                        datestart={this.state.datestart}
                                        dateend={this.state.dateend}
                                        search={this.state.search}
                                        textinput={this.state.textinput}
                                      /></div> : ''}
            </Col>
          </Row>
        </Form>

    )
  }
}

function boolConvert(data){
  let isTrue = (data === "true");
  return isTrue;
}
