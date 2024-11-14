import { Col, Container, Row } from "react-bootstrap";

export const Projects = () => {
  return (
    <section id="projects" className="py-5 section-bg-primary">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Descriptions of your projects, links to demos, and GitHub repos.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
