"use strict";

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SelectBox from './SelectBox';
import ReportBox from './ReportBox';
import NavComponent from '../components/NavComponent';


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      activeComponent: 'select',
      blarg: ''
    }
    this.buttonClick = this.buttonClick.bind(this)
  }
  buttonClick(e){
    e.preventDefault();
    this.setState({activeComponent: e.target.value})
  }


  render(){
    var active;
    if(this.state.activeComponent === 'report') {
      active = <ReportBox />
    } else {
      active = <SelectBox />
    }
    return (
      <div >
        <NavComponent blarg={this.state.activeComponent} buttonClick={this.buttonClick} />
        <div className="container">
          <div >
            {active}
          </div>
        </div>
      </div>
    );
  }
}







{/*<Button buttonClick={this.buttonClick} />
<Widget ref="red" onChange={this.update} />
<New data={data}/>*/}
