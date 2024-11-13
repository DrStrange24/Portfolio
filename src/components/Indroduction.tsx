import { Container, Row, Col, Image, Button } from "react-bootstrap";
import profileImage from "../assets/images/profile.jpg";

export const Introduction = (): JSX.Element => {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={4} className="text-center">
          <Image src={profileImage} alt="profile image" roundedCircle fluid />
        </Col>
        <Col md={8}>
          <h1>Jeremy Brynn Bacuta</h1>
          <div className="text-muted">Software Engineer</div>
          <p>
            Dynamic Software Engineer with over 1 year of experience in
            full-stack development, skilled in backend and frontend technologies
            like C#, Java, Python, React, and more. Extensive project experience
            spanning 4 years in developing desktop and web applications.
            Experienced in API integration, system optimization, and Azure
            DevOps. Adept at enhancing code quality and collaborating with
            international teams. Committed to continuous learning, seeking to
            contribute to innovative projects at a forward-thinking
            organization.
          </p>
          <Button
            href="https://storage.googleapis.com/turing_developers/resume/1724056564338_2802670_jbrynnbacuta.pdf"
            variant="primary"
            className="me-2"
          >
            Resume
          </Button>
          <br />
          <Button
            href="https://matching.turing.com/developer-resume-preview/714217e70e62b28a8c2b89806bd0071552764664e1f2cb"
            variant="secondary"
          >
            Turing Profile
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
