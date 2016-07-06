'use strict'
import React, { Component } from 'react'
import PatientIDFilter from '../filters/PatientIDFilter'


export function filterSwitch(filterName, filterOptions, isMulti){
  let options;
  switch (filterName) {
    case 'ResultEnteredByUserID':
      console.log('ResultEnteredByUserID')
      // options = getResultEnteredByUserIDOptions(filterOptions)
      break;
    case 'PatientID':
    console.log('PatientID')
      return <PatientIDFilter isMulti={isMulti} filterOptions={filterOptions} />
      break;
    case 'UserID':
      console.log('userid')
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
