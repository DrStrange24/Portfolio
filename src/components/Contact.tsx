import { useState } from "react";
import { Container, Row, Col, ListGroup, Form, Button } from "react-bootstrap";
import { socialLinks } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileAlt, faCode } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Tooltip, useSpinner } from ".";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section section-gradient-bg aurora-surface"
    >
      <div className="section-theme-overlay" />
      <Container>
        <div className="section-intro section-intro-center">
          <div>
            <span className="section-kicker">Contact</span>
            <h2>
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              Let&apos;s Connect
            </h2>
            <p className="section-subtitle">
              Open to opportunities and collaborations. Reach out directly or
              connect on the platforms below.
            </p>
          </div>
        </div>

        <Row className="contact-grid gy-4 gx-lg-4 align-items-stretch">
          <Col lg={5}>
            <div className="contact-panel h-100">
              <ListGroup variant="flush" className="contact-info">
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

              <div className="contact-links">
                <h3>Find Me Online</h3>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      href={socialLinks.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <FontAwesomeIcon icon={faGithub} className="me-2" />
                      GitHub
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href={socialLinks.leetcodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <FontAwesomeIcon icon={faCode} className="me-2" />
                      LeetCode
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href={socialLinks.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <FontAwesomeIcon icon={faFileAlt} className="me-2" />
                      Resume
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href={socialLinks.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className="contact-panel h-100">
              <AnonymousFeedback />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const AnonymousFeedback = () => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
  const userId = process.env.REACT_APP_EMAILJS_USER_ID || "";

  const { showSpinner, hideSpinner } = useSpinner();

  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    showSpinner();

    if (!feedback.trim()) {
      toast.info("Please provide your feedback.");
      hideSpinner();
      return;
    }

    const templateParams = {
      feedback,
    };

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      () => {
        setFeedback("");
        toast.success("Thank you! Your feedback has been sent.");
        hideSpinner();
      },
      () => {
        toast.error("Oops! Something went wrong. Please try again later.");
        hideSpinner();
      }
    );
  };

  return (
    <div className="feedback-panel">
      <Tooltip tooltip="All feedback is anonymous. Share anything that would make this portfolio stronger.">
        <h3>Anonymous Feedback</h3>
      </Tooltip>

      <Row className="justify-content-center">
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="feedback">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Share quick feedback or suggestions..."
                value={feedback}
                onChange={(event) => setFeedback(event.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
