import '..//node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Container,Nav,Navbar,NavDropdown } from 'react-bootstrap'


export const Navigation=()=>{
   
    return(
        <>
 <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img src="favicon.ico" width="120px" height="50px"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link active href="/">Home</Nav.Link>
        <Nav.Link active href="#link">link</Nav.Link>
       
        <NavDropdown active title="Hooks" id="basic-nav-dropdown">
          <NavDropdown.Item href="/state">UseState</NavDropdown.Item>
          <NavDropdown.Item href="/effect">UseEffect</NavDropdown.Item>
          <NavDropdown.Item href="#">UseParams</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}