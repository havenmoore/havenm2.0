import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
  const [brand, setBrand] = useState('haven moore');

  return (
    <Navbar collapseOnSelect bg="light">
      <Container>
        <Navbar.Brand href="/" onMouseEnter={() => setBrand('havenm.org')} onMouseLeave={() => setBrand('haven moore')}>{brand}</Navbar.Brand>
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
  );
};

export default NavBar;
