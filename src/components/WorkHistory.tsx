import { Col, Container, Row } from "react-bootstrap";

const Projects = (props: { title: string; content: string }) => {
  return (
    <>
      <h3>Coming Soon!</h3>
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
            <h2>Work Experience</h2>
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
