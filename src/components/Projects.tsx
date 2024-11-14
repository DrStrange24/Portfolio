import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { projects } from "../data";

export const Projects = () => {
  return (
    <section id="projects" className="py-5 section-bg-primary projects-section">
      <Container>
        <h2 className="text-light mb-4">
          <FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Projects
        </h2>
        <Row>
          {projects.map((project) => (
            <Col md={6} lg={4} key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

interface ProjectCardProps {
  title: string;
  description: string[];
  technologies: string[];
}

const ProjectCard = ({
  title,
  description,
  technologies,
}: ProjectCardProps) => {
  return (
    <Card className="mb-4 project-card">
      <Card.Body>
        <Card.Title className="text-light">{title}</Card.Title>
        <div className="text-muted">
          {description.map((line, index) => (
            <div key={index} className="mb-2">
              {line}
            </div>
          ))}
        </div>
        <div>
          {technologies.map((tech, index) => (
            <Badge bg="secondary" className="me-2" key={index}>
              {tech}
            </Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};
