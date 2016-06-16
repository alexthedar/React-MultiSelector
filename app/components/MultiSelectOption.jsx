import React, { Component } from 'react'
import Multiselect from 'react-bootstrap-multiselect';
import {ControlLabel, HelpBlock} from 'react-bootstrap';


export class MultiSelectOption extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <ControlLabel>Label</ControlLabel>
          <Multiselect onChange={this.handleChange} ref="myRef" data={this.state.myData} multiple />
        <HelpBlock>Help</HelpBlock>
      </div>
    )
  }
}
