import { Container, Row, Col, Image, Button } from "react-bootstrap";
import profileImage from "../assets/images/profile.jpg";

export const Introduction = (): JSX.Element => {
  return (
    <section id="about-me" className="section-bg-primary hero-section">
      <Container className="hero-container">
        <Row className="align-items-center">
          <Col lg={6} className="hero-content">
            <span className="hero-kicker">Software Engineer</span>
            <h1>
              Jeremy Brynn
              <span className="text-gradient-accent"> Bacuta</span>
            </h1>
            <p className="hero-lead">
              I build fast, reliable web apps and internal tools. My focus is
              full-stack delivery, API integration, and performance work that
              turns requirements into clean, scalable experiences.
            </p>
            <div className="hero-cta">
              <Button href="#projects" variant="primary" className="me-3">
                View Projects
              </Button>
              <Button href="#contact" variant="outline-light">
                Let&apos;s Connect
              </Button>
            </div>
            <div className="hero-meta">
              <span>4+ years projects</span>
              <span>Full-stack</span>
              <span>React • C# • Java</span>
            </div>
          </Col>
          <Col lg={6} className="hero-media">
            <div className="hero-image-frame">
              <Image src={profileImage} alt="profile image" rounded fluid />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
