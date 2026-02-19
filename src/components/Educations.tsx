import { Container, Row, Col } from "react-bootstrap";
import { education } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export const Educations = () => {
  return (
    <section
      id="educations"
      className="education-section section-bg-secondary section-gradient-bg"
    >
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,16,30,0.65)', zIndex: 1 }} />
      <Container style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-intro">
          <div>
            <span className="section-kicker">Background</span>
            <h2 className="text-light">
              <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
              Education
            </h2>
            <p className="section-subtitle">
              Formal training that shaped my technical foundation.
            </p>
          </div>
        </div>
        {education.map((item) => (
          <Row key={item.id} className="mb-4 education-item">
            <Col md={3} className="text-muted education-date">
              <small>{item.dates}</small>
            </Col>
            <Col md={9} className="education-detail">
              <h5 className="text-light">{item.institution}</h5>
              <p className="text-muted">{item.field}</p>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};
