import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// var data = require('json!../../MOCK_DATA1.json');
import SelectBox from './SelectBox';
import ReportBox from './ReportBox';
import NavComponent from '../components/NavComponent';

// console.log(data[0].email)

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      activeComponent: 'select',
    }
    this.buttonClick = this.buttonClick.bind(this)
  }
  buttonClick(e){
    this.setState({thing: !this.state.thing})
  }


  render(){

    return (
      <div>
        <NavComponent activeComponent={this.buttonClick}/>
      </div>
    );
  }
}







{/*<Button buttonClick={this.buttonClick} />
<Widget ref="red" onChange={this.update} />
<New data={data}/>*/}
