import { Col, Container, Row } from "react-bootstrap";

const Projects = (props: { title: string; content: string }) => {
  return (
    <>
      <h1>wait</h1>
    </>
  );
};

const WorkExperience = (props: {
  company: string;
  title: string;
  content: string;
}) => {
  return (
    <>
      <h1>WorkExperience</h1>
      <Projects title={""} content={""} />
    </>
  );
};

export const WorkHistory = () => {
  return (
    <>
      <h1>WorkHistory</h1>
      <WorkExperience company={""} title={""} content={""} />
      <Container>
        <Row>
          <Col>
            <h2>About Me</h2>
            <p>
              Brief intro about yourself and your background, skills, or
              experience.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
