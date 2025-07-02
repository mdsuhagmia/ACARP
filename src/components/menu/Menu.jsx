import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './menu.css'

const Menu = () => {
  return (
    <Navbar expand="lg" className='custom_navbar position-fixed w-100'>
      <Container>
        <Navbar.Brand href="#home"><h1>React-Bootstrap</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/api"}>Api</Nav.Link>
            <Nav.Link as={Link} to={"/api/global"}>Global</Nav.Link>
            <Nav.Link as={Link} to={"/api/global/redux"}>Redux</Nav.Link>
            <Nav.Link as={Link} to={"/api/global/redux/props"}>Props</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu