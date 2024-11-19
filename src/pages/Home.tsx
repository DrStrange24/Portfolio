import {
  Contact,
  Educations,
  Introduction,
  Projects,
  WorkHistory,
  Certificates,
  CustomNavbar,
} from "../components";

export const Home = () => {
  return (
    <>
      <CustomNavbar />
      <main className="home-main">
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
