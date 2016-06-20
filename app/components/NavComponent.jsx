'use strict'

import React from 'react';
// import { Navbar, Nav, MenuItem, NavDropdown, NavItem } from 'react-bootstrap';




export default class NavComponent extends React.Component{
  constructor(props){
    super(props);
  }
    render(){
    return(
      <nav className="navbar navbar-light bg-faded">
        <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
          &#9776;
        </button>
        <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
          <a className="navbar-brand" href="#">Responsive navbar</a>
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>
      // <div >
      //     <nav className="navbar navbar-fixed-top">
      //       <div className="nav navbar-nav">
      //         <a className="nav-item navbar-brand" href="#">Brand</a>
      //         <a className="nav-item nav-link" onClick={this.props.buttonClick} value='select'>SelectBox</a>
      //         <a className="nav-item nav-link" onClick={this.props.buttonClick} value='report'>ReportBox</a>
      //       </div>
      //     </nav>
      // </div>
    )
  }
}
