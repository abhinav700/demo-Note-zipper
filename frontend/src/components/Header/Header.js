import React from 'react' 
import { Container, Navbar, NavDropdown,Nav, FormControl } from "react-bootstrap"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Header = () => {
    return (
        <>
          <Navbar bg="primary lg me-auto" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="" >
      <Link to='/'>React-Bootstrap</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="m-auto">
          <form inline>
            <FormControl type="text"
            placeholder='search'
            className="me-auto"
            />
          </form>
      </Nav>
      
      <Nav className=" ">
        <Nav.Link href="/mynotes">
           
          My notes
      
        </Nav.Link>
        <NavDropdown title="Abhinav Agarwal" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.2"> My profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
           
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>  
        </>
    )
}

export default Header
