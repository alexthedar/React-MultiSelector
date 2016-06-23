'use strict'

import React, { Component } from 'react'


export class CheckBox extends Component{
  constructor(props){
    super(props);
    this.state={
      value: ''
    }
  }

  render(){

    return(<div>
              <input
                type="checkbox"
                name={this.props.label}
                checked={this.props.checked} />
              <label htmlFor={this.props.label} >{this.props.label}</label>
            </div>
    )
  }
}

export class RadioButton extends Component{
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
      <div className="radiobutton">
       {/*<label >
         <input type="checkbox" name={value} value={value} checked={checked}/>
         {value}
       </label>*/}
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
