import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { workExperience } from "../data";

export const WorkHistory = () => {
  return (
    <section
      id="work-history"
      className="py-5 section-bg-secondary work-experience-section"
    >
      <Container>
        <h2 className="text-light mb-4">
          <FontAwesomeIcon icon={faBriefcase} className="me-2" /> Work
          Experience
        </h2>
        <Row>
          {workExperience.map((job) => (
            <Col md={12} key={job.id}>
              <WorkExperienceCard {...job} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

interface ProjectProps {
  projectTitle: string;
  responsibilities: string[];
  technologies: string[];
}

interface WorkExperienceCardProps {
  jobTitle: string;
  company: string;
  link: string;
  dates: string;
  duration: string;
  projects: ProjectProps[];
}

const WorkExperienceCard = ({
  jobTitle,
  company,
  link,
  dates,
  duration,
  projects,
}: WorkExperienceCardProps) => {
  return (
    <Card className="mb-4 work-experience-card">
      <Card.Body>
        <Card.Title className="text-light">{jobTitle}</Card.Title>
        <Card.Subtitle className="mb-1 text-muted card-subtitle">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted"
          >
            {company}
          </a>
        </Card.Subtitle>

        {/* Dates and Duration on Separate Lines */}
        <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
          {dates} ({duration})
        </Card.Text>

        {/* Projects */}
        {projects.map((project, index) => (
          <div key={index} className="mb-3">
            <h5 className="text-light">{project.projectTitle}</h5>
            <ul className="text-muted">
              {project.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
            <div>
              {project.technologies.map((tech, idx) => (
                <Badge bg="secondary" className="me-2" key={idx}>
                  {tech}
                </Badge>
              ))}
            </div>
            <br />
          </div>
        ))}
      </Card.Body>
    </Card>
  );
};
