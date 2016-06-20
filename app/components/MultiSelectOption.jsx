import React, { Component } from 'react'
import Multiselect from 'react-bootstrap-multiselect';
// import {ControlLabel, HelpBlock} from 'react-bootstrap';


export class MultiSelectOption extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <label>Label</label>
          <select className="form-control" onChange={this.handleChange} ref="myRef" data={this.state.myData} multiple></select>
        <small className="text-muted">Help</small>
      </div>
    )
  }
}
