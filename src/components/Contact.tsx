import { Container, Row, Col, ListGroup } from "react-bootstrap";

export const Contact = () => {
  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <Row>
          <Col md={8} lg={6} className="mx-auto text-center">
            <h2>Contact</h2>
            <p>I’d love to hear from you! Here’s how you can reach me:</p>

            {/* Contact Info */}
            <ListGroup variant="flush" className="contact-info text-start mt-4">
              <ListGroup.Item>
                <strong>Email:</strong>{" "}
                <a href="mailto:jbrnnbacuta@gmail.com">jbrnnbacuta@gmail.com</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Phone:</strong>{" "}
                <a href="tel:+639636269523">+63 (963) 626-9523</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Location:</strong> Manhoy, Dao, Capiz, Western Visayas,
                Philippines 5810
              </ListGroup.Item>
            </ListGroup>

            {/* Professional Links */}
            <div className="contact-links mt-4">
              <h3>Connect with Me</h3>
              <Row className="justify-content-center">
                <Col xs="auto">
                  <a
                    href="https://www.linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-linkedin mx-2"
                  >
                    LinkedIn
                  </a>
                </Col>
                <Col xs="auto">
                  <a
                    href="https://github.com/your-github-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-github mx-2"
                  >
                    GitHub
                  </a>
                </Col>
                <Col xs="auto">
                  <a
                    href="https://www.turing.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-info mx-2"
                  >
                    Turing Profile
                  </a>
                </Col>
                <Col xs="auto">
                  <a
                    href="/path-to-your-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success btn-resume mx-2"
                  >
                    Resume
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
