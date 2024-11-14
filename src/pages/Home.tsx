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
        <Introduction />
        <WorkHistory />
        <Projects />
        <Educations />
        <Certificates />
        <Contact />
      </main>
    </>
  );
};
