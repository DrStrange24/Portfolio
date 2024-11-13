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
                    href="https://www.linkedin.com/in/jeremy-brynn-bacuta-b834a232b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-linkedin mx-2"
                  >
                    LinkedIn
                  </a>
                </Col>
                <Col xs="auto">
                  <a
                    href="https://github.com/DrStrange24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-github mx-2"
                  >
                    GitHub
                  </a>
                </Col>
                <Col xs="auto">
                  <a
                    href="https://matching.turing.com/developer-resume-preview/714217e70e62b28a8c2b89806bd0071552764664e1f2cb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-info mx-2"
                  >
                    Turing Profile
                  </a>
                </Col>
                <Col xs="auto">
                  <a
                    href="https://drive.google.com/file/d/1aEMUmkoBa3079VWtBW23-IK5ErN79G3p/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success btn-resume mx-2"
                  >
                    Resume
                  </a>
                </Col>
                <Col xs="auto">
                  <a
                    href="https://leetcode.com/u/jeremy2429/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success btn-leetcode mx-2"
                  >
                    LeetCode
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
