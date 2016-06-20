import React, { Component } from 'react'
// import {ControlLabel, HelpBlock} from 'react-bootstrap';



export class SingleOption extends Component {
  constructor(props){
    super(props);
    this.state = {
      label: '',
      help: ''
    }
  }
  render(){
    let filterComponent =[];
    return(
      <div>
        <ControlLabel>Label</ControlLabel>
          {filterComponent}
        <HelpBlock>Help</HelpBlock>
      </div>
    )
  }
}

export class MultiOption extends Component {
  constructor(props){
    super(props);
    this.state = {
      label: '',
      help: ''
    }
  }

  render(){
    let filterComponent =[];
    return(
      <div>
        <ControlLabel>Label</ControlLabel>
          {filterComponent}
        <HelpBlock>Help</HelpBlock>
      </div>
    )
  }
}
