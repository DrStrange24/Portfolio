import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { socialLinks } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFileAlt,
  faCode,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <Row>
          <Col md={8} lg={6} className="mx-auto text-center">
            <h2>
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              Contact
            </h2>
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
              <ul className="list-inline">
                <li className="list-inline-item mx-3">
                  <a
                    href={socialLinks.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark github-link"
                  >
                    <FontAwesomeIcon icon={faGithub} className="me-2" />
                    GitHub
                  </a>
                </li>
                <li className="list-inline-item mx-3">
                  <a
                    href={socialLinks.leetcodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-warning"
                  >
                    <FontAwesomeIcon icon={faCode} className="me-2" />
                    LeetCode
                  </a>
                </li>
                <li className="list-inline-item mx-3">
                  <a
                    href={socialLinks.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-success"
                  >
                    <FontAwesomeIcon icon={faFileAlt} className="me-2" />
                    Resume
                  </a>
                </li>
                <li className="list-inline-item mx-3">
                  <a
                    href={socialLinks.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-primary"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                    LinkedIn
                  </a>
                </li>
                <li className="list-inline-item mx-3">
                  <a
                    href={socialLinks.turingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark"
                  >
                    <FontAwesomeIcon icon={faLaptopCode} className="me-2" />
                    Turing Profile
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
