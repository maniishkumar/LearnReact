import React from "react";
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from "react-bootstrap";

class MenuBar extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Home</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Contact Us
          </NavItem>
          <NavItem eventKey={2} href="#">
            About
          </NavItem>
          <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>AI</MenuItem>
            <MenuItem eventKey={3.2}>Machine Learning</MenuItem>
            <MenuItem eventKey={3.3}>Natural Language Processing</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Native apps for mobile</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default MenuBar;
