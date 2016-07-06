'use strict'
import React, { Component } from 'react'
import DropDownWrapper from '../containers/DropDownWrapper'
import {getFilterOptions} from '../utilities/FilterUtil'
import {fullName} from '../utilities/FilterUtil'


// var keys = ['FIRSTNAME', 'LASTNAME', 'MEDICALRECORDIDENTIFIER'];

export default class PatientIDFilter extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    var patientIdSelections = getFilterOptions(this.props.filterOptions);
    this.patientIdDropDownSelections = this.makeOptions(patientIdSelections);
  }
  makeOptions(patientIdSelections){
    return patientIdSelections.map((select, index) => {
      var label = `${fullName(select.FIRSTNAME, select.LASTNAME)} ${select.MEDICALRECORDIDENTIFIER}`
      return {
        value: select.KEYID,
        label: label
      }
    })
  }
  render(){
    console.log(this.patientIdDropDownSelections)
    debugger
    return(
      <div>
        <label>
          <DropDownWrapper { ...this.props} />
        </label>
      </div>
    )
  }
}
