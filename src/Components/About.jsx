import React from "react";
import profile from "../images/main-img.jpg";

const About = (props) => {
  const profilePicture = <img src={profile} alt="my-profile" />;
  const bio = (
    <p className="bio-text">
      I'm a cloud/software engineer with a passion for creating seamless,
      high-performance solutions for businesses. My experience with cloud
      technologies, coupled with my background in software engineering, allows
      me to tackle complex projects with ease and deliver results that exceed
      expectations. Whether it's migrating legacy systems to the cloud,
      designing and implementing new applications, or optimizing existing
      systems, I'm always up for the challenge.
    </p>
  );
  return (
    <section className="about">
      <div className="picture-section">{profilePicture}</div>
      <div className="bio">
        <h1>{props.title}</h1>
        <h2>
          Software/Cloud <span>Engineer</span>
        </h2>
        {bio}
        <button id="general-btn">Lets Talk</button>
      </div>
    </section>
  );
};

export default About;
