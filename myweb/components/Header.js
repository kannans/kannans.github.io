import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

export default React.createClass({
  render(){
      return (
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Kannan SV</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">About Me</NavItem>
              <NavItem eventKey={1} href="#">My Work</NavItem>
              <NavItem eventKey={2} href="#">Contact Me</NavItem>
             </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }
);