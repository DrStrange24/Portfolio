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
      <main className="mt-5 pt-5">
        <section id="home" className="py-5">
          <Introduction />
        </section>
        <section id="work-history" className="py-5 bg-light">
          <WorkHistory />
        </section>
        <section id="projects" className="py-5">
          <Projects />
        </section>
        <section id="educations" className="py-5 bg-light">
          <Educations />
        </section>
        <section id="certificates" className="py-5 bg-light">
          <Certificates />
        </section>
        <section id="contact" className="py-5">
          <Contact />
        </section>
      </main>
    </>
  );
};
