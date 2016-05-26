import React, { Component } from 'react'

export default class Button extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return (
      <div>

        <button onClick={this.props.buttonClick}>Button</button>
      </div>
    );
  }
}
