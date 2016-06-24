'use strict'

import React, { Component } from 'react'


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
    this.state={
      value: ''
    }
  }
  getFilter(){

  }
  render(){
    let filter=this.getFilter()
    return(
      <div className="select">
       {/*<label >
         <input type="checkbox" name={value} value={value} checked={checked}/>
         {value}
       </label>*/}
     </div>
    )
  }
}
