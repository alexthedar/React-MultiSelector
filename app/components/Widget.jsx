import React, { Component } from 'react'

export default class Widget extends Component {
  constructor(props){
    super(props)
  }
  componentWillUnmount(){
    console.log('gone')
  }

  render(){
    return (
      <div>
        <input ref="inp" type="range" min="0" max="255"
          onChange={this.props.update} />
        <h1>{this.props.txt}</h1>
        <button onClick={this.props.buttonClick}>Button</button>
      </div>
    );
  }
}
