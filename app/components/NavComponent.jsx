import React from 'react';
import { Navbar, Nav, MenuItem, NavDropdown, NavItem } from 'react-bootstrap';




export default class NavComponent extends React.Component{
  constructor(props){
    super(props);
  }
    render(){
    return(
      <div >
          <Navbar >
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Brand</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav >
                <NavItem  onClick={this.props.buttonClick} value='select' >
                    SelectBox
                </NavItem>
                <NavItem  onClick={this.props.buttonClick} value='report' >
                    ReportBox
                </NavItem>
                <NavItem eventKey={2} href="#">{this.props.txt}</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

      </div>
    )
  }
}
