import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { workExperience } from "../data";

export const WorkHistory = () => {
  return (
    <section
      id="work-history"
      className="section-bg-secondary work-experience-section section-gradient-bg aurora-surface"
    >
      <div className="section-theme-overlay" />
      <Container>
        <div className="section-intro">
          <div>
            <span className="section-kicker">Career</span>
            <h2>
              <FontAwesomeIcon icon={faBriefcase} className="me-2" /> Work
              Experience
            </h2>
            <p className="section-subtitle">
              Roles focused on delivering features, quality, and velocity.
            </p>
          </div>
        </div>
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
            className="text-light"
          >
            {company}
          </a>
        </Card.Subtitle>

        <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
          {dates} ({duration})
        </Card.Text>

        {projects.map((project, index) => (
          <div key={index} className="projects mb-3">
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
          </div>
        ))}
      </Card.Body>
    </Card>
  );
};
