"use strict";
import React, { Component } from 'react'

export const FAKEDATA = require('json!../../fakedata/FAKEDATA.json');
export const schema = require('json!../../fakedata/reports.schema.json');
export const manSchema = require('json!../../fakedata/man.schema.json');
export const datalength = Object.keys(FAKEDATA).length;

export const dataKeys = [];
(function (data){
  for(var i = 0; i < Object.keys(data.columns).length; i++){
    dataKeys.push(data.columns[i].name);
  }
}(schema));

export let manKeys = Object.keys(manSchema)

export const dataObjectArray = [];
(function (FAKEDATA){
    for(var i = 0; i < FAKEDATA.length; i++){
    dataObjectArray.push(
      React.createElement('DataObject', {
        id: FAKEDATA[i].id,
        report: FAKEDATA[i].report,
        filter: FAKEDATA[i].filter,
        checkbox: FAKEDATA[i].checkbox.show,
        checkboxLabels: FAKEDATA[i].checkbox.labels,
        radiobutton: FAKEDATA[i].radiobutton.show,
        radiobuttonLabels: FAKEDATA[i].radiobutton.labels,
        dropdown: FAKEDATA[i].dropdown.show,
        dropdownSelection: FAKEDATA[i].dropdown.selection,
        dateStart: FAKEDATA[i].datepicker.start,
        dateEnd: FAKEDATA[i].datepicker.end,
        search: FAKEDATA[i].search,
        textinput: FAKEDATA[i].textinput
      })
    )
  }
}(FAKEDATA))
