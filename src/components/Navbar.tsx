import { Navbar, Nav, Container } from "react-bootstrap";
import { ThemeToggle } from "./ThemeToggle";

export const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#about-me" className="nav-name">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about-me">About Me</Nav.Link>
            <Nav.Link href="#work-history">Work History</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#educations">Educations</Nav.Link>
            <Nav.Link href="#certificates">Certificates</Nav.Link>
            <Nav.Link href="#contact">Get In Touch</Nav.Link>
          </Nav>
          <ThemeToggle />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
