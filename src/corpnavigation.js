import '..//node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Container,Navbar,Nav } from "react-bootstrap"
export const Corpnavigation=()=>{
    return(
        <>
  <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><img src="favicon.ico" width="120px" height="50px"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link active href="/gett">Home</Nav.Link>
        <Nav.Link active href="/postt">Agreement</Nav.Link>
       
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}