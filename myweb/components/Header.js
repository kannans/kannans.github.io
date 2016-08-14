import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import NavLink from './NavLink'

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
              <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
              <li><NavLink to="/about">About Me</NavLink></li>
              <li><NavLink to="/works">My Works</NavLink></li>
              <li><NavLink to="/contact">Contact Me</NavLink></li>
           </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }
);