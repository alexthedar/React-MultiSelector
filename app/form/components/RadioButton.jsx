'use strict'
import React, { Component } from 'react'

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
