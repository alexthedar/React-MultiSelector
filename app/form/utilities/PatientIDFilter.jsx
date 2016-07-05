'use strict'
import React, { Component } from 'react'
import DropDownWrapper from '../containers/DropDownWrapper'
import * as Util from './FilterUtil'


var keys = ['FIRSTNAME', 'LASTNAME', 'MEDICALRECORDIDENTIFIER'];

export default class PatientIDFilter extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <label>
          <DropDownWrapper { ...this.props} />
        </label>
      </div>
    )
  }
}
