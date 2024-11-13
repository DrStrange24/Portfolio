import { Col, Container, Row } from "react-bootstrap";

const Projects = (props: { title: string; content: string }) => {
  return (
    <>
      <h2>Coming Soon!</h2>
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
      <h1>Work Experience</h1>
      <Projects title={""} content={""} />
    </>
  );
};

export const WorkHistory = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>About Me</h2>
            <WorkExperience company={""} title={""} content={""} />
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
