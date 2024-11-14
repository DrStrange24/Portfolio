import { Container, Row, Col, Image } from "react-bootstrap";
import { personalInfo } from "../data";

export const Introduction = (): JSX.Element => {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={4} className="text-center">
          <Image
            src={personalInfo.profileImageUrl}
            alt="profile image"
            roundedCircle
            fluid
          />
        </Col>
        <Col md={8}>
          <h1>Jeremy Brynn Bacuta</h1>
          <h3>Software Engineer</h3>
          <p>
            Dynamic Software Engineer with 2 years of experience in full-stack
            development, skilled in backend and frontend technologies like C#,
            Java, Python, React, and more. Extensive project experience spanning
            4 years in developing desktop and web applications. Experienced in
            API integration, system optimization, and Object-oriented
            Programming. Adept at enhancing code quality and collaborating with
            international teams. Committed to continuous learning, seeking to
            contribute to innovative projects at a forward-thinking
            organization.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
