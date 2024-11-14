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
