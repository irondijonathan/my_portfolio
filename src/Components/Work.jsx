import React from "react";

const Work = () => {
  const work = "Want to work with me?";
  const workBtn = "Hire Me";
  return (
    <section className="work">
      <div className="work-container">
        <h1>{work}</h1>
        <button>{workBtn}</button>
      </div>
    </section>
  );
};

export default Work;
