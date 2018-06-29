import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <h1 className="site-title">NOMADOPEDIA</h1>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Who Am I?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Collection</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Places</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
