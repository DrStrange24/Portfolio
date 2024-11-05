import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ThemeToggle } from "./ThemeToggle";

export const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Your Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#case-studies">Case Studies</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#work">Recent Work</Nav.Link>
            <Nav.Link href="#contact">Get In Touch</Nav.Link>
          </Nav>
          {/* <Introduction />
            <WorkHistory />
            <Projects />
            <Educations />
            <Certificates /> */}
          <ThemeToggle />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
