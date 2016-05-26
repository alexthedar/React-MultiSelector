import React, { Component } from 'react'

export default class Widget extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <input ref="inp" type="range" min="0" max="255"
          onChange={this.props.update} />
      </div>
    );
  }
}
