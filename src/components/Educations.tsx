import { Container, Row, Col } from "react-bootstrap";
import { education } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export const Educations = () => {
  return (
    <section
      id="educations"
      className="py-5 education-section section-bg-secondary"
    >
      <Container>
        <h2 className="text-light mb-4">
          <FontAwesomeIcon icon={faGraduationCap} className="me-2" /> Education
        </h2>
        {education.map((item) => (
          <Row key={item.id} className="mb-4">
            <Col md={3} className="text-muted">
              <small>{item.dates}</small>
            </Col>
            <Col md={9}>
              <h5 className="text-light">{item.institution}</h5>
              <p className="text-muted">{item.field}</p>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};
