'use strict'

import React, { Component } from 'react'
import Select from 'react-select';



export class CheckBox extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return( <div className="clickInput">
              <label>
                <input
                type="checkbox"
                name={this.props.label}
                value={this.props.value}
                checked={this.props.checked}
                onChange={this.props.onChange}/>
                {this.props.label}
              </label>
            </div>
    )
  }
}

export class RadioButton extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="clickInput">
        <label>
          <input
          type="radio"
          name={this.props.label}
          value={this.props.value}
          checked={this.props.checked}
          onChange={this.props.onChange}/>
          {this.props.label}
        </label>
      </div>
    )
  }
}

export class DropDown extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let multiHelp = (this.props.multi)? <small className="text-muted">Select Multiple</small> : <small className="text-muted">Select One</small>;
    return(
      <div>
        <label htmlFor={this.props.label}>{this.props.label}</label>
        <select className="form-control"
          onChange={this.props.onChange}
          value={this.props.value}
          multiple={this.props.multi}
          >{this.props.options}
        </select>
        {multiHelp}
     </div>
    )
  }
}
