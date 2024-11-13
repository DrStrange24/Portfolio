import { CustomNavbar } from "../components/Navbar";
import {
  Contact,
  Educations,
  Introduction,
  Projects,
  WorkHistory,
} from "../components";
import { Certificates } from "../components/Certificates";

export const Home = () => {
  return (
    <>
      <CustomNavbar />
      <main className="home-main mt-5 pt-5">
        <section id="home" className="py-5 section-bg-primary">
          <Introduction />
        </section>
        <section id="work-history" className="py-5 section-bg-secondary">
          <WorkHistory />
        </section>
        <section id="projects" className="py-5 section-bg-primary">
          <Projects />
        </section>
        <section id="educations" className="py-5 section-bg-secondary">
          <Educations />
        </section>
        <section id="certificates" className="py-5 section-bg-primary">
          <Certificates />
        </section>
        <section id="contact" className="py-5 section-bg-secondary">
          <Contact />
        </section>
      </main>
    </>
  );
};
