import React, { Component } from 'react';
import { Container, Col, Row, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

//import '../App.css';

class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = {brand: "haven moore"}
  }

  brandMouseEnter = () => {
    this.setState({brand: "havenm.org"})
  }

  brandMouseLeave = () => {
    this.setState({brand: "haven moore"})
  }

  render() {
    return <Navbar collapseOnSelect bg="light">
      <Container>
        <Navbar.Brand href="/" onMouseEnter={this.brandMouseEnter} onMouseLeave={this.brandMouseLeave}> {this.state.brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/about" eventKey={1}>
                <Nav.Item>
                  <Nav.Link href="/about">
                    About
                  </Nav.Link>
                </Nav.Item>
            </LinkContainer>

            <LinkContainer to="/resume" eventKey={2}>
                <Nav.Item>
                  <Nav.Link href="/resume">
                    Resume
                  </Nav.Link>
                </Nav.Item>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  }
}

export default NavBar;
