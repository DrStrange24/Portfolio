import { Container, Row, Col, Image, Button } from "react-bootstrap";
import profileImage from "../assets/images/profile.jpg";

export const Introduction = (): JSX.Element => {
  return (
    <section id="about-me" className="section-bg-primary hero-section section-gradient-bg" style={{ position: 'relative' }}>
      {/* Overlay for text contrast */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(10,16,30,0.65)',
        zIndex: 1
      }} />
      <Container className="hero-container" style={{ position: 'relative', zIndex: 2 }}>
        <Row className="align-items-center">
          <Col lg={6} className="hero-content" style={{ color: '#fff' }}>
            <span className="hero-kicker" style={{ color: 'var(--accent-secondary)' }}>Software Engineer</span>
            <h1 style={{ color: '#fff' }}>
              Jeremy Brynn
              <span className="text-gradient-accent"> Bacuta</span>
            </h1>
            <p className="hero-lead" style={{ color: '#e0e6f0' }}>
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
            <div className="hero-meta" style={{ color: '#e0e6f0' }}>
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
