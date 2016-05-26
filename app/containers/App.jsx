import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Widget from '../components/Widget';
import Box from './Box'
import Button from '../components/Button'
import New from '../components/New'
var data = require('json!../../MOCK_DATA1.json');
// import SelectBox from './SelectBox';
// import ReportBox from './ReportBox';

// <NavComponent  />
// console.log(data[0].email)

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: '',
      thing: false,
      red: 0,
      green: 0,
      blue: 0
    }
    this.update = this.update.bind(this)
    this.buttonClick = this.buttonClick.bind(this)
  }
  buttonClick(e){
    this.setState({thing: !this.state.thing})
  }
  update(e){
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
      })
  }


  render(){

    return (
      <div>
        <Button buttonClick={this.buttonClick} />
        <Widget ref="red" onChange={this.update} />
        <New data={data}/>


      </div>
    );
  }
}
