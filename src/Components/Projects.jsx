import React from "react";
import { BsCodeSlash, BsBriefcaseFill } from "react-icons/bs";
import { MdContentPasteSearch } from "react-icons/md";

const Projects = (props) => {
  const projects = [
    {
      name: "Web Scraper for e-commerce sites",
      icon: <BsCodeSlash size={40} color="#fff" />,
      description:
        "I have created a software solution that aggregates product information, including prices and images, from multiple e-commerce platforms and stores it in a centralized database. The software provides an API that enables the display of the various products in a highly customizable format, allowing me to tailor the solution to meet the specific needs of your organization.",
    },
    {
      name: "Automated Content creation for Social media",
      icon: <MdContentPasteSearch size={40} color="#fff" />,
      description:
        "This software boasts the capability to generate and publish high-quality content for your social media accounts, tailored to your specific niche. The software seamlessly blends video and audio elements to produce a cohesive and impactful final product, which is then scheduled for posting on your social media platform at the preferred timing and frequency specified by the user.",
    },
    {
      name: "Order Management System for food",
      icon: <BsBriefcaseFill size={40} color="#fff" />,
      description:
        "I have developed a software solution that provides real-time tracking and monitoring capabilities for food preparation. This allows customers to have visibility into the status of their food, enabling them to make informed decisions and have a clear understanding of when to expect their meal.",
    },
  ];
  return (
    <section className="projects">
      <h1>{props.title}</h1>
      <div className="projects-container">
        <div className="card">
          <div className="project-icons"> {projects[0].icon}</div>
          <h2>{projects[0].name}</h2>
          <p>{projects[0].description}</p>
        </div>

        <div className="card">
          <div className="project-icons"> {projects[1].icon}</div>
          <h2>{projects[1].name}</h2>
          <p>{projects[1].description}</p>
        </div>

        <div className="card">
          <div className="project-icons"> {projects[2].icon}</div>
          <h2>{projects[2].name}</h2>
          <p>{projects[2].description}</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
