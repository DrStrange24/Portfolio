import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { CustomButton } from "./Button";
// import profileImage from "../assets/profile.jpg";

export const ProfileSection = () => {
  return (
    <Container className="text-center my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1>Your Name Here</h1>
          <p>
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <CustomButton text="Let's get started" />
        </Col>
        <Col md={6}>
          <Image src={""} roundedCircle width="200" height="200" />
        </Col>
      </Row>
    </Container>
  );
};
