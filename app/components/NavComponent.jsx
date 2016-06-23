'use strict'

import React from 'react';


export default class NavComponent extends React.Component{
  constructor(props){
    super(props);
  }
    render(){
    return(
      <nav className="navbar navbar-default ">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className=" navbar-brand" href="#">Brand</a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <a className=" " onClick={this.props.buttonClick} value='select'>SelectBox</a>
            </li>
            <li>
              <a className=" " onClick={this.props.buttonClick} value='report'>ReportBox</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
