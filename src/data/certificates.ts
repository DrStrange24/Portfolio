import { CertificateCardProps } from "../components/Certificates";

export type CertificateProps = {
  id: number;
} & CertificateCardProps;

export const certificates: CertificateProps[] = [
  {
    id: 1,
    title: "Basic of Artificial Intelligence Approach",
    issueDate: "Apr 2021",
    type: "pdf",
    link: "https://drive.google.com/file/d/1OsxfFFTCNScUoBCr7d3yvXoP5vgqNS8p/view?usp=sharing",
  },
  {
    id: 2,
    title: "Common Threats",
    issueDate: "Feb 2024",
    type: "pdf",
    link: "https://drive.google.com/file/d/1W5CYnVTlb0MX9fxgQXXkty48vnqaIrjX/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Browser-in-the-Browser Attacks",
    issueDate: "Feb 2024",
    type: "pdf",
    link: "https://drive.google.com/file/d/1q-6NQEUN7ezYLWyUozkjYzze739MNezs/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Creating Strong Passwords - Security Awareness Training",
    issueDate: "Feb 2024",
    type: "pdf",
    link: "https://drive.google.com/file/d/103NG_fm0kebMVVF0Axsf-ete2_EUSmtO/view?usp=drive_link",
  },
  {
    id: 5,
    title: "Handling and Sharing Sensitive Information",
    issueDate: "Nov 2023",
    type: "pdf",
    link: "https://drive.google.com/file/d/1p42IcjkrXQGkoWpKE-Jy5Brrsf5ABrrA/view?usp=drive_link",
  },
  {
    id: 6,
    title: "PealPay Internship",
    issueDate: "May 2022",
    type: "pdf",
    link: "https://drive.google.com/file/d/1e7g3ETOwDOElHWFjoCv4EMaQzEMS9-dU/view?usp=drive_link",
  },
  {
    id: 7,
    title: "ISATU Pre-internship General Orientation",
    issueDate: "Jan 2022",
    type: "pdf",
    link: "https://drive.google.com/file/d/1GthUQlzf6NIbO1p_ey8GxkE2UgMq5i7Y/view?usp=drive_link",
  },
  {
    id: 8,
    title: "Legal Guidelines for Protecting Sensitive Information",
    issueDate: "Nov 2023",
    type: "pdf",
    link: "https://drive.google.com/file/d/1vUC92REVJ4H0cZCuOY-vqYqU1XvW3iGM/view?usp=drive_link",
  },
  {
    id: 9,
    title: "Python Programming Essential Course",
    issueDate: "Sep 2021",
    type: "pdf",
    link: "https://drive.google.com/file/d/164POqa-kKFep4HajuaRzAlP7VbY4Cq2Q/view?usp=drive_link",
  },
  {
    id: 10,
    title: "Kevin Mitnick Security Awareness Training",
    issueDate: "Sep 2023",
    type: "pdf",
    link: "https://drive.google.com/file/d/1wh1ZyM07Aq0voUwucXyN1ltMlWFMmPt_/view?usp=drive_link",
  },
  {
    id: 11,
    title: "Sense Software Solutions Certificate of Employment",
    issueDate: "Feb 06, 2024",
    type: "pdf",
    link: "https://drive.google.com/file/d/1ISMjir1obp_eYN4Ana-fFzdKGoBG6CEG/view?usp=drive_link",
  },
  {
    id: 12,
    title: "Working With Third Parties Securely",
    issueDate: "Nov 2023",
    type: "pdf",
    link: "https://drive.google.com/file/d/1hVJJrJD6-HInDs2OPpbPMVouXJbSHVIH/view?usp=drive_link",
  },
  {
    //multiple certificate sessions
    id: 13,
    title: "Youth for Information Technology 2021 Day 1 - 3",
    issueDate: "Oct 2021",
    type: "pdf",
    link: "https://drive.google.com/file/d/1OCLKS6JLBudxJonQTHNR6S_KgoCYZ7uN/view?usp=drive_link",
  },
];

// Sort certificates by `issueDate` in descending order
certificates.sort((a, b) => {
  // Use a fallback date for undefined values (e.g., January 1, 1970)
  const dateA = a.issueDate ? new Date(a.issueDate).getTime() : 0;
  const dateB = b.issueDate ? new Date(b.issueDate).getTime() : 0;

  // Sort in descending order
  return dateB - dateA;
});
