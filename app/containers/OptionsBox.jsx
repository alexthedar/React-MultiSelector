import React, { Component } from 'react'


var divStyle = {
  background: 'green',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

export default class  OptionsBox extends Component{
  constructor(){
    super();
    this.state = {
      //need selected fropdown to determine option display
      //should work similar to navbar buttons except optionsbox will determin what is showed
    }
    // this.buttonClick = this.buttonClick.bind(this)
  }


  render(){
    return(
      <div style={divStyle}>
        OPTIONSBOX
      </div>
    )
  }
}
