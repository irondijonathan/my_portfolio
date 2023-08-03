import React from "react";
import { BsCodeSlash, BsBriefcaseFill } from "react-icons/bs";
import { MdContentPasteSearch } from "react-icons/md";

const Projects = (props) => {
  const projects = [
    {
      name: "Reside Me",
      icon: <BsCodeSlash size={40} color="#fff" />,
      description:
        "I have developed a web application that facilitates property listing, leasing, letting, and renting. The software efficiently aggregates property information from various sources and stores it in a centralized database. Through the application's API, users can display property listings in a highly customizable format, tailored to meet the specific needs of their organization. Additionally, the software ensures seamless property management and an enhanced user experience for property seekers and owners alike.",
    },
    {
      name: "Heny",
      icon: <BsCodeSlash size={40} color="#fff" />,
      description:
        "I assisted them in automating their entire data collection process, including provisioning the necessary infrastructure for the system. Additionally, I contributed to the development of their personalization engine, which enhances their ability to provide customized and tailored experiences to their users. The combination of automation, infrastructure setup, and advanced personalization capabilities has significantly improved the efficiency and effectiveness of their data-driven operations.",
    },
    {
      name: "Ameriless",
      icon: <BsCodeSlash size={40} color="#fff" />,
      description:
        "I have created a software solution that aggregates product information, including prices and images, from multiple e-commerce platforms and stores it in a centralized database. The software provides an API that enables the display of the various products in a highly customizable format, allowing me to tailor the solution to meet the specific needs of your organization.",
    },
    {
      name: "My Mailer",
      icon: <BsBriefcaseFill size={40} color="#fff" />,
      description:
        "I have created a powerful software solution designed to assist businesses and email marketers in automating their email sending process. The software enables seamless and efficient sending of bulk emails to engage with customers, prospective customers, and clients. Moreover, it prioritizes the highest security and data privacy policies, ensuring that sensitive information remains protected and confidential. With this solution, businesses can enhance their communication strategies and establish stronger relationships with their target audience while adhering to strict security and privacy standards.",
    },
    {
      name: "Automated Content creation for Social media",
      icon: <MdContentPasteSearch size={40} color="#fff" />,
      description:
        "This software boasts the capability to generate and publish high-quality content for your social media accounts, tailored to your specific niche. The software seamlessly blends video and audio elements to produce a cohesive and impactful final product, which is then scheduled for posting on your social media platform at the preferred timing and frequency specified by the user.",
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

        <div className="card">
          <div className="project-icons"> {projects[3].icon}</div>
          <h2>{projects[3].name}</h2>
          <p>{projects[3].description}</p>
        </div>

        <div className="card">
          <div className="project-icons"> {projects[3].icon}</div>
          <h2>{projects[4].name}</h2>
          <p>{projects[4].description}</p>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
