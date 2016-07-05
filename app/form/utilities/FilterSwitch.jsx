'use strict'
import React, { Component } from 'react'
import PatientIDFilter from './PatientIDFilter'


function filterSwitch(filterName, filterOptions, isMulti){
  let options;
  switch (filterName) {
    case 'ResultEnteredByUserID':
      console.log('ResultEnteredByUserID')
      // options = getResultEnteredByUserIDOptions(filterOptions)
      break;
    case 'PatientID':
      var t = <PatientIDFilter isMulti={isMulti} filterOptions={filterOptions} />
      debugger
      break;
    case 'StartDate':
      console.log('StartDate')
      // options = getDate()
      break;
    case 'EndDate':
      console.log('EndDate')
      // options = getDate()
      break;
    default:
      throw new Error('Filter Not Recognized');
  }
}
