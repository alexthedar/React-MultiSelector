'use strict'

import React, { Component } from 'react'
import ReactDom from 'react-dom'
import {Checkbox, Radio, FormGroup, FormControl, ControlLabel, HelpBlock, Form, Button, Col, InputGroup, Glyphicon, Row} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

// export class RadioOption extends Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     const radioButtons = [];
//     if(this.props.radiobuttonlabels){
//       var radiobuttonLabelArray = this.props.radiobuttonlabels.split(',');
//       for(let i=0; i<radiobuttonLabelArray.length; i++){
//         radioButtons.push(<Radio key={i}>{radiobuttonLabelArray[i]}</Radio>)
//       }
//     }
//     return(
//       <div>
//         <ControlLabel>Label</ControlLabel>
//           <Radio></Radio>
//         <HelpBlock>Help</HelpBlock>
//       </div>
//     )
//   }
// }

export class CheckOption extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <ControlLabel>Label</ControlLabel>
          <Checkbox></Checkbox>
        <HelpBlock>Help</HelpBlock>
      </div>
    )
  }
}

export class SelectOption extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const dropdownOptions = [];
    let dropdown = [];
    var dropdownSelectionArray = this.props.dropdownSelection.split(',');
    for(let i=0; i<dropdownSelectionArray.length; i++){
      dropdownOptions.push(<option key={i} value={dropdownSelectionArray[i]}>{dropdownSelectionArray[i]}</option>)
    }
    if(this.props.dropdownMulti){
      dropdown = <FormControl componentClass="select" multiple>{dropdownOptions}</FormControl>
    } else {
      dropdown = <FormControl componentClass="select" >{dropdownOptions}</FormControl>
    }

    return(
      <div>
        <ControlLabel>Label</ControlLabel>
        {dropdown}
        <HelpBlock>Help</HelpBlock>
      </div>
    )
  }
}

export class Datepick extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: new Date().toISOString()
    }
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(value) {
    // value is an ISO String.
    this.setState({
      value: value
    });
  }
  render(){
    return <DatePicker value={this.state.value} onChange={this.handleChange} />
  }
}

export class TextInput extends Component{
  render(){
    return(
      <div>
        <ControlLabel>Label</ControlLabel>
        <FormControl type="text" placeholder="Enter text"/>
        <HelpBlock>Help</HelpBlock>
      </div>
    )
  }
}

export class RadioOption extends React.Component{
	constructor(props){
    super(props);
    this.state = {
      value : this.props.kwargs.defaultCheckedValue || ''
    }
  }

	change(e){
    const val = e.target.value;
      this.setState({
        value : val
      })
    }
    render(){
      let values = this.props.kwargs.values;
      let radioSelects = values.map(value => {
        var defaultChecked = (value == this.props.kwargs.defaultCheckedValue);
        var id = this.props.id;
        // var q = <input type="radio" onChange={this.change.bind(this)}>
        // var t =  <Radio key={value} ref={value} onClick={this.change} value={value}  defaultChecked={defaultChecked}>{value}</Radio>
        // if (value === defaultChecked){
        //   t.checked = true
        // } else {
        //   t.checked = false
        // }
        // var r = <Radio/>
        // debugger
        // console.log(t)
        // return <Radio key={id + value} ref={id} name={id} value={value} defaultChecked={defaultChecked} onClick={this.change.bind(this)}>{value}</Radio>
        return  <span className="radio">
                  <label>
                    <input type="radio" key={id + value} ref={id} name={id} value={value} defaultChecked={defaultChecked} onClick={this.change.bind(this)}/>{value}
                  </label>
                </span>
    })
      return <div>
        {radioSelects}
        {this.state.value}
      </div>
    }
}
