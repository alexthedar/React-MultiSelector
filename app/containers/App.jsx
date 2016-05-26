import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Widget from '../components/Widget';
import Box from './Box'
// import SelectBox from './SelectBox';
// import ReportBox from './ReportBox';

// <NavComponent  />

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
  componentWillUnmount(){
    console.log('bye!')
  }
  render(){
    var text;
    if(this.state.thing === true){
      text = <Box />
    } else {
      text = <Widget />
    }
    return (
      <div>


          <Widget ref='red' update={this.update} buttonClick={this.buttonClick}/>
          <Widget ref='green' update={this.update} buttonClick={this.buttonClick}/>
          <Widget ref='blue' update={this.update} buttonClick={this.buttonClick}/>

          {this.state.red}
          <hr />
          {this.state.green}
          <hr />
          {this.state.blue}
        {text}

      </div>
    );
  }
}
