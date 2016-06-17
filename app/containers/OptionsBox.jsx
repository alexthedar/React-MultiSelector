'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// import {CheckBox, RadioButton, Dropdown, Datepick, TextInput } from '../components/FormWidgets'
import {Button, Col, Row, Checkbox, Radio} from 'react-bootstrap'
import {Datepick, RadioOption} from '../components/FormWidgets'


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
        returnFilter  = this.renderSelect('select', label, filter.selectOptions)
        break;
      case 'textinput':
        returnFilter = this.renderTextInput('tinput', label)
        break;
      case 'textarea':
        returnFilter = this.renderTextArea('tarea', label)
        break;
      case 'date':
        returnFilter = this.renderDate('date', label)
      break;
    }
    // console.log(returnFilter)
    return <div key={report + '#' + label}>{returnFilter}</div>
  }

  isValid() {
    //push valid filters into array to check
     var fields =  this.props.reportInfo.filters.map(filter => {
           return filter.label
         })

     var errors = {}
    //  fields.forEach(function(field) {
    //    var value = trim(this.refs[field].value)
    //    if (!value) {
    //      errors[field] = 'This field is required'
    //    }
    //  }.bind(this))
    //  this.setState({errors: errors})

     var isValid = true
    //  for (var error in errors) {
    //    isValid = false
    //    break
    //  }
     return isValid
   }

  getFormData() {
    //gather data from form
    var fields =  this.props.reportInfo.filters.map(filter => {
          return filter.label
        })
    var t = function(fields){
      var o ={};
      for(let i = 0; i < fields.length; i++){
        o[fields[i]] = this.refs.fields[i].value
      }
      return o
    }


     var data = {
       firstName: this.refs.firstName.value,
       test1: this.refs.test1.value,
       test2: this.refs.test2.value,
       test3: this.refs.test3.value,
       test4: this.refs.test4.value}
     return data
   }

  renderTextInput(id, label) {
     var t = this.renderField(id, label,
       <input type="text" className="form-control" id={id} ref={id}/>
     )
     return t
   }

  renderTextArea(id, label) {
     return this.renderField(id, label,
       <textarea className="form-control" id={id} ref={id}/>
     )
   }

  renderDate(id, label) {
     return this.renderField(id, label,
       <Datepick className="form-control" id={id} ref={id} />
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
    let value = "";
    var radios = <RadioOption ref={label} id={id} kwargs={kwargs} value={value} />
    //  var f = kwargs.values.map(function(value) {
    //    var defaultChecked = (value == kwargs.defaultCheckedValue)
    //    return (
    //      <Radio key={id + value} ref={id} name={id} value={value} defaultChecked={defaultChecked}>{value}</Radio>
    // )
    //  })
     return this.renderField(id, label, radios)
   }

//this is rendering radios seperately on the screen but treating them as one

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
      return t
    }

  render(){
    let reportInfo = this.props.reportInfo;
    let reportFilters = this.props.reportInfo.filters.map(filter => {
          return filter
        })

    const filtersInColumns = this.props.reportInfo.filters.map(filter => {
            let completeFilters = [];
            completeFilters.push(this.makeFilter(filter, this.props.reportInfo.report));
            return completeFilters
          })
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
