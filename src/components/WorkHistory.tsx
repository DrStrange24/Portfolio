const Projects = (props: { title: string; content: string }) => {
  return (
    <>
      <h1>wait</h1>
    </>
  );
};

const WorkExperience = (props: {
  company: string;
  title: string;
  content: string;
}) => {
  return (
    <>
      <h1>WorkExperience</h1>
    </>
  );
};

export const WorkHistory = () => {
  return (
    <>
      <h1>WorkHistory</h1>
      <WorkExperience company={""} title={""} content={""} />
    </>
  );
};
