"use strict";

import React, { Component } from 'react'
import {CheckBox, RadioButton, Dropdown, Datepick, TextInput } from '../components/FormWidgets'
import forms from 'newforms';
import isomorph from 'isomorph'
import Stuff from './jsonschema.jsx'
import {FAKEDATA, datalength, dataKeys, manKeys, schema, dataObjectArray} from '../components/data'

// export default class  OptionsBox extends Component{
//   constructor(props){
//     super(props);
//   }
//     render(){
//       var checkbox, radiobutton, dropdown, datestart, dateend, search, textinput;
//
//       if(this.props.checkbox){
//         checkbox= <CheckBox checkboxlabels={this.props.checkboxlabels}></CheckBox>
//       }
//
//       if(this.props.radiobutton){
//         radiobutton= <RadioButton radiobuttonlabels={this.props.radiobuttonlabels}></RadioButton>
//       }
//
//       if(this.props.dropdown){
//         var t = this.props.dropdown
//         dropdown= <Dropdown dropdownSelection={this.props.dropdownselection}></Dropdown>
//       }
//
//       if(this.props.datestart){
//         datestart= <Datepick />
//       }
//
//       if(this.props.dateend){
//         dateend= <Datepick />
//       }
//
//       if(this.props.search){
//         search= <TextInput />
//       }
//
//       if(this.props.textinput){
//         textinput= <TextInput />
//       }
//
//     return(
//       <div >
//         {checkbox}
//         <hr />
//         {radiobutton}
//         <hr />
//         {dropdown}
//         <hr />
//         {datestart}
//         {dateend}
//         <hr />
//         {search}
//         <hr />
//         {textinput}
//         <showReportOptions />
//       </div>
//     )
//   }
// }

var extend = isomorph.object.extend

let REPORTS = dataObjectArray.map(option => {
  var props = { ...option.props}
  return [option.props.id, `${option.props.id} - ${option.props.report} - ${option.props.filter.toString()}`]
});

var BootstrapRadioInlineRenderer = forms.RadioFieldRenderer.extend({
  render() {
    return this.choiceInputs().map(input => <label className="radio-inline">
      {input.tag()} {input.choiceLabel}
    </label>)
  }
})

var ReportForm = forms.Form.extend({
  firstName: forms.CharField({maxLength: 50})
// , lastName: forms.CharField({maxLength: 50})
// , phoneNumber: forms.RegexField(/^[-\d]*$/, {
//     errorMessages: {invalid: 'Invalid characters in phone number'}
//   })
// , email: forms.EmailField()
// , question: forms.CharField({widget: forms.Textarea({attrs: {rows: 3}})})
// , address: forms.CharField({widget: forms.Textarea({attrs: {rows: 3}})})
// , city: forms.CharField({maxLength: 50})
// , state: forms.ChoiceField({choices: REPORTS})
// , zipCode: forms.RegexField(/^\d{5}(?:-?\d{4})?$/, {
//     errorMessages: {invalid: 'Must be 5 digts or 5+4 digits'}
//   })
// , currentCustomer: forms.ChoiceField({
//     choices: [['Y', 'Yes'], ['N', 'No']]
//   , initial: 'N'
//   , widget: forms.RadioSelect({renderer: BootstrapRadioInlineRenderer})
//   })

, constructor(kwargs) {
    ReportForm.__super__.constructor.call(this, kwargs)
  }

// , cleanPhoneNumber() {
//     var phoneNumber =  this.cleanedData.phoneNumber.replace(/-/g, '')
//     if (phoneNumber.length < 10) {
//       throw forms.ValidationError('Must contain at least 10 digits')
//     }
//     return phoneNumber
//   }

, render() {
    return this.visibleFields().map(this.renderField.bind(this))
  }

, renderField(bf) {
    var errors = bf.errors()
    var hasErrors = errors.isPopulated()
    var fieldCassName = $c({'form-control': bf.name !== 'currentCustomer'})
    return <div key={bf.htmlName} className={$c('form-group', {'has-error': hasErrors})}>
      {bf.labelTag({attrs: {className: "col-sm-2 control-label"}})}
      <div className="col-sm-10">
        {bf.render({attrs: {className: fieldCassName}})}
      </div>
      <div className="col-sm-4 help-text">
        <p className="form-control-static">
          {hasErrors && errors.messages()[0]}
        </p>
      </div>
    </div>
  }
})

var showReportOptions = React.createClass({
  getInitialState() {
    return {
    submitted: null
    }
  }

, render() {
    var submitted
    if (this.state.submitted !== null) {
      submitted = <div className="alert alert-success">
        <p>ReportForm data:</p>
        <pre><code>{JSON.stringify(this.state.submitted, null, '  ')}</code></pre>
      </div>
    }

    return <div>
      {/*<div className="panel panel-default">*/}
        {/*<div className="panel-heading clearfix">*/}
          {/*<h3 className="panel-title pull-left">Contact Form</h3>*/}
          {/*<div className="pull-right">*/}
            {/*<label className="checkbox-inline">*/}
              {/*<input type="checkbox"*/}
                {/*checked={this.state.email}*/}
                {/*onChange={this.handleChange.bind(this, 'email')}*/}
              {/*/> Email*/}
            {/*</label>*/}
            {/*<label className="checkbox-inline">*/}
              {/*<input type="checkbox"*/}
                {/*checked={this.state.question}*/}
                {/*onChange={this.handleChange.bind(this, 'question')}*/}
              {/*/> Question*/}
            {/*</label>*/}
          {/*</div>*/}
        {/*</div>*/}
        <ReportFormComponent ref="contactForm"
          onSubmit={this.handleSubmit}
        />
      {/*</div>*/}
      {submitted}
    </div>
  }

, handleChange(field, e) {
    var nextState = {}
    nextState[field] = e.target.checked
    this.setState(nextState)
  }

, handleSubmit(data) {
    this.setState({submitted: data})
  }
})

/**
 * A contact form with certain optional fields.
 */
var ReportFormComponent = React.createClass({
  getDefaultProps() {
    return {
      email: true
    , question: false
    }
  }

, getInitialState() {
    return {
      form: new ReportForm(this.getFormKwargs(this.props))
    }
  }

, getFormKwargs(props, extraKwargs) {
    return extend({
      validation: {on: 'change blur', delay: 500}
    , onChange: this.forceUpdate.bind(this)
    , company: props.company
    , email: props.email
    , question: props.question
    }, extraKwargs)
  }

, componentWillReceiveProps(nextProps) {
    if (nextProps.email !== this.props.email ||
        nextProps.question !== this.props.question) {
      var formKwargs = this.getFormKwargs(nextProps, {
        data: (this.state.form.isBound ? this.state.form.data : null)
      , errors: this.state.form.errors()
      })
      var form = new ReportForm(formKwargs)
      this.setState({form: form})
    }
  }

, onSubmit(e) {
    e.preventDefault()
    var isValid = this.state.form.validate(this.refs.form)
    this.props.onSubmit(isValid ? this.state.form.cleanedData : null)
    this.forceUpdate()
  }

, render() {
    return <form ref="form" onSubmit={this.onSubmit}>
        <div className="form-horizontal">
          {this.state.form.render()}
        </div>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
    </form>
  }
})


export default class OptionsBox extends Component{
  render(){
    return(
      <div>
        <showReportOptions />
        <Stuff />
      </div>
    )
  }
}

// Utils

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
