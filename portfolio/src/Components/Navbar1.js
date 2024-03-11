import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link className='text-decoration-none' to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/about'>About</Link></Nav.Link>
            <Nav.Link>Contact</Nav.Link>
            <Nav.Link>Blog</Nav.Link>
            <Nav.Link>Resume</Nav.Link>
            <Nav.Link>Service</Nav.Link>
            <Nav.Link>Work</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar1