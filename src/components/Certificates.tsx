import { Accordion, Button, Card, Container } from "react-bootstrap";
import { certificates } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faImage } from "@fortawesome/free-solid-svg-icons";
import { CertificateProps } from "../data";
import { formatDate } from "../utils/formatDate";
import { faAward } from "@fortawesome/free-solid-svg-icons";

export const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-5 section-bg-primary certificate-section"
    >
      <Container>
        <h2 className="text-center mb-4">
          {" "}
          <FontAwesomeIcon icon={faAward} className="me-2" />
          Certificates
        </h2>
        <Accordion defaultActiveKey="0">
          {certificates.map((certificate: CertificateProps, index) => (
            <Accordion.Item eventKey={index.toString()} key={certificate.id}>
              <Accordion.Header>
                {formatDate(certificate.issueDate)} - {certificate.title}
              </Accordion.Header>
              <Accordion.Body>
                <CertificateCard
                  title={certificate.title}
                  issueDate={certificate.issueDate}
                  type={certificate.type}
                  thumbnail={certificate.thumbnail}
                  link={certificate.link}
                />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export interface CertificateCardProps {
  title: string;
  issueDate?: string;
  type: "pdf" | "image";
  thumbnail?: string;
  link: string;
}

const CertificateCard = ({
  title,
  issueDate,
  type,
  thumbnail,
  link,
}: CertificateCardProps) => {
  const handleViewCertificate = () => {
    window.open(link, "_blank"); // Opens PDF or image in a new tab
  };

  return (
    <Card className="mb-3">
      {thumbnail && <Card.Img variant="top" src={thumbnail} alt={title} />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {issueDate && <Card.Text>Issued: {issueDate}</Card.Text>}
        <Button
          variant="primary"
          onClick={handleViewCertificate}
          className="mt-2"
        >
          <FontAwesomeIcon
            icon={type === "pdf" ? faFilePdf : faImage}
            className="me-2"
          />
          View Certificate
        </Button>
      </Card.Body>
    </Card>
  );
};
