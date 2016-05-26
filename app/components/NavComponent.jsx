import React from 'react';
import { Navbar, Nav, MenuItem, NavDropdown, NavItem, Breadcrumb } from 'react-bootstrap';




export default class NavComponent extends React.Component{
  constructor(props){
    super(props);
  }
    handleClick (e) {
      this.props.onSelect(this.props.id);
    }
    render(){
      const className = this.props.active ? 'active' : null;
    return(
      <div >
          <Navbar >
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">CliniPro Web Reports</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav onClick={this.props.update}>
                <NavItem  txt='select' eventKey={1} >
                    SelectBox
                </NavItem>
                <NavItem  txt='report' eventKey={2} >
                    ReportBox
                </NavItem>
                <NavItem eventKey={2} href="#">{this.props.txt}</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/*<Widget txt={this.state.txt} update={this.update} />
          <button onClick={this.props.onClick}>{this.props.text}</button>*/}
      </div>
    )
  }
}
