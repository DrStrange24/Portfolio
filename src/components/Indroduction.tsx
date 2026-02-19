import { Container, Row, Col, Image } from "react-bootstrap";
import profileImage from "../assets/images/profile.jpg";

export const Introduction = (): JSX.Element => {
  return (
    <section id="about-me" className="py-5 section-bg-primary">
      <Container className="mt-5">
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <Image src={profileImage} alt="profile image" roundedCircle fluid />
          </Col>
          <Col md={8}>
            <h1>Jeremy Brynn Bacuta</h1>
            <h3>Software Engineer</h3>
            <p>
              Software engineer with 2 years of full-stack experience across
              C#, Java, Python, and React. Delivered web and desktop
              applications over 4 years of project work, with strengths in API
              integration, performance tuning, and clean UI. Known for
              elevating code quality, collaborating with international teams,
              and turning requirements into reliable, user-friendly features.
              Eager to contribute to product teams that value craft, velocity,
              and continuous learning.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
