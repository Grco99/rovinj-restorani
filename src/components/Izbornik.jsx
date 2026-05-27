import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { RouteNames, IME_APLIKACIJE } from "../constants";

export default function Izbornik() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to={RouteNames.HOME}>
          {IME_APLIKACIJE}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={RouteNames.HOME}>
              Početna
            </Nav.Link>
            <Nav.Link as={NavLink} to={RouteNames.RESTORANI}>
              Restorani
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}