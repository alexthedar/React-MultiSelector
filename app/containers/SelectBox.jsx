"use strict";

import React, { Component } from 'react'
import OptionsBox from './OptionsBox'
import {FormGroup, FormControl, ControlLabel, HelpBlock, Button, Form, Col, Row} from 'react-bootstrap'

//fakedata functions and info
import {FAKEDATA, datalength, dataKeys, manKeys, schema, dataObjectArray} from '../components/data'


var buttonStyle = {
  float: 'right'
}
var selectStyle = {
  overflow: 'hidden'
}
export default class SelectBox extends Component{
  constructor(){
    super();
    this.state = {
      showFilters: '',
      activeSelect: '22'
    }
    this.dropdownSelect = this.dropdownSelect.bind(this)
  }
  dropdownSelect(e){
    e.preventDefault();
    let value = e.currentTarget.value;

    //convert string to bool
    let filter = e.target.options[e.target.selectedIndex].dataset.filter;
    let filterVal = (filter === "true");

    // set states
    this.setState({ showFilters: filterVal,
                    activeSelect: value});
                    debugger;
  }

  render(){
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
              {(this.state.showFilters === true)? <div className="well"><OptionsBox  activeSelect={this.state.activeSelect}/></div> : ''}
            </Col>
          </Row>
        </Form>

    )
  }
}

// const arr=[]
// const DataObjects = (function (DataObject){
//   for(var i = 0; i < DataObject.length; i++){
//     const props = { ...DataObject[i].props}
//     arr.push(<DataObject
//               id={props.id}
//               report={props.report}
//               filter={props.filter}
//               checkbox={props.checkbox}
//               checkboxLabels={props.checkbox}
//               radiobutton={props.radiobutton}
//               radiobuttonLabels={props.radiobutton}
//               dropdown={props.dropdown}
//               dropdownSelection={props.dropdown}
//               dateStart={props.datepicker}
//               dateEnd={props.datepicker}
//               search={props.search}
//               textinput={props.textinput}
//       />)
//   }
// }(dataObjectArray));
