"use strict";

import React, { Component } from 'react'
import OptionsBox from './OptionsBox'
import {FormGroup, FormControl, ControlLabel, HelpBlock, Button, Form, Col, Row} from 'react-bootstrap'
import isomorph from 'isomorph'
import forms from 'newforms'
import moment from 'moment';

//fakedata functions and info
import {FAKEDATA, datalength, dataKeys, manKeys, schema, dataObjectArray} from '../components/data'

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
  Reports: forms.ChoiceField({choices: REPORTS}),
  Datestart: forms.DateField({inputFormats: '%m/%d/%Y'})

, constructor(kwargs) {
  ReportForm.__super__.constructor.call(this, kwargs)
  }

, render() {
    return this.visibleFields().map(this.renderField.bind(this))
  }

, renderField(bf) {
  debugger;

    var errors = bf.errors()
    var hasErrors = errors.isPopulated()
    var fieldCassName = $c({'form-control': bf.name !== 'currentCustomer'})
    var t = <div key={bf.htmlName} className={$c('form-group', {'has-error': hasErrors})}>
      {bf.labelTag({attrs: {className: "col-sm-1 control-label"}})}
      <div className="col-sm-11">
        {bf.render({attrs: {className: fieldCassName}})}
      </div>
      <div className="col-sm-4 help-text">
        <p className="form-control-static">
          {hasErrors && errors.messages()[0]}
        </p>
      </div>
    </div>
    return  t
  }
})

var Example = React.createClass({
  getInitialState() {
    return {
      email: true
    , question: true
    , submitted: null
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
      <div className="panel panel-default">
        <div className="panel-heading clearfix">
          <h3 className="panel-title pull-left">Reports</h3>
        </div>
        <ReportFormComponent ref="reportForm"
          email={this.state.email}
          question={this.state.question}
          company={this.props.company}
          onSubmit={this.handleSubmit}
        />
      </div>
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
      <div className="panel-body">
        <div className="form-horizontal">
          {this.state.form.render()}
        </div>
      </div>
      <div className="panel-footer">
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </div>
    </form>
  }
})

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



export default class SelectBox extends Component{
  constructor(){
    super();
    this.state = {
      showFilters: '',
      activeSelect: '',
      checkbox: '',
      checkboxlabels: '',
      radiobutton: '',
      radiobuttonlabels: '',
      dropdown: '',
      dropdownselection: '',
      datestart: '',
      dateend: '',
      search: '',
      textinput: ''
    }
    this.dropdownSelect = this.dropdownSelect.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleChange.bind(this)
  }
  dropdownSelect(e){
    e.preventDefault();
    let value = e.currentTarget.value;
    const dataset = e.target.options[e.target.selectedIndex].dataset;

    //retrieve states from option
    let filter = boolConvert(dataset.filter);
    let report = dataset.report;
    let checkbox = boolConvert(dataset.checkbox);
    let checkboxlabels = dataset.checkboxlabels;
    let radiobutton = boolConvert(dataset.radiobutton);
    let radiobuttonlabels = dataset.radiobuttonlabels;
    let dropdown = boolConvert(dataset.dropdown);
    let dropdownselection = dataset.dropdownselection;
    let datestart = boolConvert(dataset.datestart);
    let dateend = boolConvert(dataset.dateend);
    let search = boolConvert(dataset.search);
    let textinput = boolConvert(dataset.textinput);


    // set states
    this.setState({ showFilters: filter,
                    activeSelect: value,
                    report: report,
                    filter: filter,
                    checkbox: checkbox,
                    checkboxlabels: checkboxlabels,
                    radiobutton: radiobutton,
                    radiobuttonlabels: radiobuttonlabels,
                    dropdown: dropdown,
                    dropdownselection: dropdownselection,
                    datestart: datestart,
                    dateend: dateend,
                    search: search,
                    textinput: textinput
                  });
  }

  handleChange (field, e) {
    var nextState = {}
    nextState[field] = e.target.checked
    this.setState(nextState)
  }

  handleSubmit () {
    if (this.refs.contactForm.isValid()) {
      this.setState({submitted: this.refs.contactForm.getFormData()})
    }
  }

  render(){

    //iterate over dataobjects to set options in selection
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
        <div>
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
              {(this.state.showFilters === true)?
                <div className="well"><OptionsBox
                                        activeSelect={this.state.activeSelect}
                                        filter={this.state.filter}
                                        report={this.state.report}
                                        checkbox={this.state.checkbox}
                                        checkboxlabels={this.state.checkboxlabels}
                                        radiobutton={this.state.radiobutton}
                                        radiobuttonlabels={this.state.radiobuttonlabels}
                                        dropdown={this.state.dropdown}
                                        dropdownselection={this.state.dropdownselection}
                                        datestart={this.state.datestart}
                                        dateend={this.state.dateend}
                                        search={this.state.search}
                                        textinput={this.state.textinput}
                                      /></div> : ''}
            </Col>
          </Row>
        </Form>
        <Example company="Blah blah"/>
        </div>
    )
  }
}

function boolConvert(data){
  let isTrue = (data === "true");
  return isTrue;
}
