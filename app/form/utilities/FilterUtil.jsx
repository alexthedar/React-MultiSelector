'use strict'
import React, { Component } from 'react'
import DateWrapper from '../containers/DateWrapper'
import CheckBoxWrapper from '../containers/CheckBoxWrapper'
import RadioButtonWrapper from '../containers/RadioButtonWrapper'
import DropDownWrapper from '../containers/DropDownWrapper'

const hl7json = require('json!../../../fakedata/hl7filter.json');
let hl7 = hl7json

// let siteId = hl7.SiteID;
// let fitlerName = hl7.FilterName
// let primaryFilters = hl7.PrimaryFilters
// let secondaryFilters = hl7.SecondaryFilters
// let userId = hl7.PrimaryFilters[0]
let patientId = hl7.PrimaryFilters[2].options
// let startDate = hl7.PrimaryFilters[2]
// let endDate = hl7.PrimaryFilters[3]
//
// let sysDateTag = 'System.Nullable`1[System.DateTime]'
// let sysDoubleTag = 'System.Double'
//
export function fullName(first, last){
  return `${first} ${last}`
}

export function boolConvert(data){
  let isTrue = (data === 'true');
  return isTrue;
}

export function isDouble(n){
  typeof n === 'number'
}

export function isArray(n){
  n.isArray
}

export function isObject(n){
  typeof n === 'object' && !n.isArray
}

export function isDate(n){
  n instanceof Date
}

// let sysUserTag = 'UserID'
// let sysPatientTag = 'PatientID'
// let sysStartDateTag = 'StartDate'
// let sysEndDateTag = 'EndDate'



var k = ['FIRSTNAME', 'LASTNAME', 'MEDICALRECORDIDENTIFIER'];
var fo = patientId;

export function buildReturnFilterObject(filterObj){
  var newFilterObj = {}
  newFilterObj.SiteID = filterObj.SiteID
  newFilterObj.FilterName = filterObj.FilterName
  newFilterObj.PrimaryFilters = filterObj.PrimaryFilters.map((filter, index) => {
    return cleanFilter(filter)
  })
  if(filterObj.SecondaryFilters !== null){
    newFilterObj.SecondaryFilters = filterObj.SecondaryFilters.map((filter, index) => {
      return cleanFilter(filter)
    })
  } else {
    newFilterObj.SecondaryFilters = null
  }
  return newFilterObj;
}

function cleanFilter(filter){
  var returnFilter = {}
  returnFilter.Name = filter.Name
  returnFilter.isMulti = filter.isMulti
  returnFilter.datatype = filter.datatype
  returnFilter.options = null
  returnFilter.Selected = []
}

export function getFilterOptions(filterOptions){
  return filterOptions.map((option, index) => {
    return option.Selection
  })
}

export function getSecondaryOptions(filterOptions){
  let secondaryFiltersArray = [];
  filterOptions.map((option, index) => {
    if (option.SecondaryFilters !== null){
      secondaryFiltersArray.push(option.SecondaryFilters)
    }
  })
  return secondaryFiltersArray
}

export function getFilter(data){
    let filter;
    let options = data.props.filterInfo.options
    let type = data.props.filterInfo.type

    switch (options.length) {
      case 1:
      case 2:
        filter = <RadioButtonWrapper {...data.props} />
        break;
      case 3:
      case 4:
      case 5:
      filter = <CheckBoxWrapper {...data.props} />
        break;
      case 6:
        break;
      default:
      filter = <DropDownWrapper {...data.props}/>
    }
    if(type === 'date'){
      filter = <DateWrapper {...data.props}/>}
    return filter;
  }
