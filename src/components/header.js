import { Navbar, Nav, NavItem } from 'react-bootstrap';
import React, { Component } from 'react';

const Header = () => {
  return(
    <Navbar inverse>
       <Navbar.Header>
         <Navbar.Brand>
           <a href="#">React-Bootstrap</a>
         </Navbar.Brand>
         <Navbar.Toggle />
       </Navbar.Header>
       <Navbar.Collapse>
         <Nav>
           <NavItem eventKey={1} href="#">Link</NavItem>
           <NavItem eventKey={2} href="#">Link</NavItem>
         </Nav>
       </Navbar.Collapse>
   </Navbar>
  )
}

export default Header;
