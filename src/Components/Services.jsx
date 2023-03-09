import React from "react";
import {
  BsFillCloudFill,
  BsFillDatabaseFill,
  BsPeopleFill,
  BsCodeSlash,
  BsBriefcaseFill,
  BsFillBellFill,
} from "react-icons/bs";

const Services = (props) => {
  const services = [
    {
      name: "Web/Mobile Development",
      icon: <BsCodeSlash size={40} color="#fff" />,
      description:
        "Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.",
    },
    {
      name: "Cloud Services/Consulting",
      icon: <BsFillCloudFill size={40} color="#fff" />,
      description:
        "I conduct cloud migration, design and implementation of new cloud-based applications, optimization of existing systems, and ongoing maintenance and support. With expertise in cloud platforms such as AWS, Azure, and GCP, and proficiency in programming languages like Python, Java, and C++, I can help organizations transform their IT infrastructure and improve their overall performance and efficiency.",
    },
    {
      name: "Business Process Automation",
      icon: <BsBriefcaseFill size={40} color="#fff" />,
      description:
        "I provide bespoke IT solutions that are entirely tailored to your needs. No matter the size of your business, connect all your day-to-day business processes that are integral with all aspects. I can custom design an ERP and Business software:",
    },
    {
      name: "Web Scraping/Data Mining",
      icon: <BsFillDatabaseFill size={40} color="#fff" />,
      description:
        "Are you trying to get leads of potential clients or you you simply want to get information of all products on an e-commerce for business, I can automate and present you a csv or google sheet file of what you want when you want it.",
    },
    {
      name: "E-commerce Development",
      icon: <BsCodeSlash size={40} color="#fff" />,
      description:
        "Whether you are an individual with a few products to sell online or a large store chain with thousands of product with complex variations and unique value proposition, I provide everything you need to reach your target audience",
    },
    {
      name: "Professional Services/Consulting",
      icon: <BsPeopleFill size={40} color="#fff" />,
      description:
        "My Consulting Services looks at Business Process Modeling, Data Mining and Analysis, Business Intelligence Development and Information Technology Advisory. I proffer solutions that are aimed towards reaping benefits while also mitigating risks across your business",
    },
    {
      name: "Software Training and awareness",
      icon: <BsFillBellFill size={40} color="#fff" />,
      description:
        "I conduct training on the design, usage, troubleshooting and intricacies of IT management solutions. Whether you need a one-day onsite training session for your front-office staff or you need training for a major organizational development project, I can provide outstanding service to you.",
    },
  ];
  return (
    <section className="services">
      <h1>{props.title}</h1>
      <div className="services-container">
        <div className="card">
          <div className="project-icons">{services[0].icon}</div>
          <h2>{services[0].name}</h2>
          <p>{services[0].description}</p>
        </div>

        <div className="card">
          <div className="project-icons">{services[1].icon}</div>
          <h2>{services[1].name}</h2>
          <p>{services[1].description}</p>
        </div>

        <div className="card">
          <div className="project-icons">{services[2].icon}</div>
          <h2>{services[2].name}</h2>
          <p>{services[2].description}</p>
        </div>

        <div className="card">
          <div className="project-icons">{services[3].icon}</div>
          <h2>{services[3].name}</h2>
          <p>{services[3].description}</p>
        </div>

        {/* <div className="card">
          <div className={services[4].icon}></div>
          <h2>{services[4].name}</h2>
          <p>{services[4].description}</p>
        </div> */}

        <div className="card">
          <div className="project-icons">{services[5].icon}</div>
          <h2>{services[5].name}</h2>
          <p>{services[5].description}</p>
        </div>

        <div className="card">
          <div className="project-icons">{services[6].icon}</div>
          <h2>{services[6].name}</h2>
          <p>{services[6].description}</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
