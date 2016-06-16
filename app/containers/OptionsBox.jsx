'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// import {CheckBox, RadioButton, Dropdown, Datepick, TextInput } from '../components/FormWidgets'
import {Button, Col, Row, Checkbox, Radio} from 'react-bootstrap'


export default class  OptionsBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      errors: {}
    }
    this.makeFilter = this.makeFilter.bind(this)
  }

  makeFilter(filter, report){
    var returnFilter;
    let label = filter.label;
    let type = filter.type;
    switch(type){
      case 'checkbox':
        returnFilter = this.renderCheck('check', label, {
          values: filter.checkOptions
          , defaultCheckedValue: filter.checkOptions[0]
        })
        break;
      case 'radiobutton':
          returnFilter = this.renderRadio('radio', label, {
            values: filter.radioOptions
          , defaultCheckedValue: filter.radioOptions[0]
          })
          break;
      case 'select':
        returnFilter  = this.renderSelect('dropdown', label, filter.selectOptions)
        break;
      case 'textinput':
        returnFilter = this.renderTextInput('textinput', label)
        break;
      case 'textarea':
        returnFilter = this.renderTextArea('textArea', label)
        break;
      case 'date':
        returnFilter = this.renderTextArea('textArea', "DATE")
      break;
    }
    // console.log(returnFilter)
    return <div key={report + '#' + label}>{returnFilter}</div>
  }

  // buildDisplay(reportInfoFiltersArray){
  //   let arr = []
  //
  //   if(reportInfoFiltersArray.type === "checkbox"){
  //     let  check = this.renderCheck('check', 'Check', {
  //       values: reportInfoFiltersArray.checkboxLabels
  //       , defaultCheckedValue: reportInfoFiltersArray.checkboxLabels[0]
  //     })
  //     arr.push(check)
  //   }
  //   if(reportInfoFiltersArray.radiobutton){
  //     arr.push(radio)
  //   }
  //   if(reportInfoFiltersArray.dropdown){
  //     let select  = this.renderSelect('dropdown', 'Dropdown', reportInfoFiltersArraselect.dropdownSelection)
  //     arr.push(select)
  //   }
  //   if(reportInfoFiltersArray.search){
  //     arr.push(textinput)
  //   }
  //   if(reportInfoFiltersArray.textinput){
  //     arr.push(textArea)
  //   }
  //   let columnWidth = Math.round(12/arr.length);
  //   if(columnWidth < 4){
  //     columnWidth = 4
  //   }
  //   const columns = [];
  //   for(let i=0; i < arr.length; i++){
  //     columns.push(<Row key={i} >{arr[i]}</Row>)
  //   }
  //   return columns
  // }

  isValid() {
    //push valid filters into array to check
     var fields = ['firstName']
    //  , 'lastName', 'phoneNumber', 'address', 'city', 'state', 'zipCode'

     var errors = {}
     fields.forEach(function(field) {
       var value = trim(this.refs[field].value)
       if (!value) {
         errors[field] = 'This field is required'
       }
     }.bind(this))
     this.setState({errors: errors})

     var isValid = true
     for (var error in errors) {
       isValid = false
       break
     }
     return isValid
   }

  getFormData() {
    //gather data from form
     var data = {
       firstName: this.refs.firstName.value,
       test1: this.refs.test1.value,
       test2: this.refs.test2.value,
       test3: this.refs.test3.value,
       test4: this.refs.test4.value}
     return data
   }

  renderTextInput(id, label) {
     return this.renderField(id, label,
       <input type="text" className="form-control" id={id} ref={id}/>
     )
   }

  renderTextArea(id, label) {
     return this.renderField(id, label,
       <textarea className="form-control" id={id} ref={id}/>
     )
   }
  renderSelect(id, label, values) {
     var options = values.map(function(value) {
       return <option key={value} value={value}>{value}</option>
     })
     return this.renderField(id, label,
       <select className="form-control" id={id} ref={id}>
         {options}
       </select>
     )
   }

  renderRadio(id, label, kwargs) {
     var radios = kwargs.values.map(function(value) {
       var defaultChecked = (value == kwargs.defaultCheckedValue)
       return (
        //  <Radio ref={id + value} name={id} value={value} defaultChecked={defaultChecked}>{value}</Radio>
      <div className="radio">
       <label >
         <input type="radio"  ref={id + value} name={id} value={value} defaultChecked={defaultChecked}/>
         {value}
       </label>
     </div>
    )
     })
     return this.renderField(id, label, radios)
   }

  renderCheck(id, label, kwargs) {
     var checkBoxes = kwargs.values.map(function(value) {
       var defaultChecked = (value == kwargs.defaultCheckedValue)
       return (
      <div className="checkbox">
       <label >
         <input type="checkbox" ref={id + value} name={id} value={value} defaultChecked={defaultChecked}/>
         {value}
       </label>
     </div>
    )
     })
     return this.renderField(id, label, checkBoxes)
   }

   renderField(id, label, field) {
      var t = <div  className={$c('form-group', {'has-error': id in this.state.errors})}>
        <label  htmlFor={id} className="col-sm-4 control-label">{label}</label>
        <div className="col-sm-8">
          {field}
        </div>
      </div>
      // console.log(t)
      return t
    }


  render(){
    let reportInfo = this.props.reportInfo;
    let reportFilters = { ...this.props.reportInfo.filters}

    // console.log(reportInfo.filters.length)
    // let reportFilters = (reportInfo) => {
    //   let filterArray = []
    //     for(var i = 0; i < reportInfo.filters.length; i++){
    //      filterArray.push(reportInfo.filters[i])
    //      debugger;
    //   }
    //   return this.buildDisplay(filterArray);
    // }
    // console.log(this.props.reportInfo.filters)
    // console.log(reportFilters)
      // function t(reportInfo){
      // var id = reportInfo.id
      // var report = reportInfo.report
      // var filters = reportInfo.filters.map(filter => {
      // });

    // }
    const filtersInColumns = this.props.reportInfo.filters.map(filter => {
          let completeFilters = [];
          completeFilters.push(this.makeFilter(filter, this.props.reportInfo.report));
          return completeFilters
        })
    // (this.props.reportInfo) => {
    //   var filters = this.props.reportInfo.filters;
    //   var id = this.props.reportInfo.id
    //   for(let i = 0; i < filters.length; i++){
    //     completeFilters.push(makeFilter(filter[i], id));
    //
    //   }
    // }

    // this.buildDisplay(this.props.reportInfo.filters)
    // let options = TEMPDATA.map(option => {
    //   var props = { ...option}
    //   return  <option
    //     key={option.id}
    //     value={option.id}
    //     >{option.id} - {option.report}
    //   </option>
    // });

    // console.log('option')
    // console.log(filtersInColumns)
    // console.log(reportInfo)
    return(
      <div  >
        {filtersInColumns}
      </div>
    )
  }
}



//utils
var trim = function() {
  var TRIM_RE = /^\s+|\s+$/g
  return function trim(string) {
    return string.replace(TRIM_RE, '')
  }
}()

function $c(staticClassName, conditionalClassNames) {
  var classNames = []
  if (typeof conditionalClassNames == 'undefined') {
    conditionalClassNames = staticClassName
  }
  else {
    classNames.push(staticClassName)
  }
  for (var className in conditionalClassNames) {
    if (!!conditionalClassNames[className]) {
      classNames.push(className)
    }
  }
  return classNames.join(' ')
}
