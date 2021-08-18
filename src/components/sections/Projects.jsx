import React from "react";

const Projects = () => {
  return (
    <Container>
      <SectionHeading className={`uppercase`} title={data.title} />
      <div className={`space-y-12 mt-6`}>
        {data.data.map((item, idx) => {
          return <Item key={idx} item={item} />;
        })}
      </div>
      <Divide />
    </Container>
  );
};

export default Projects;
