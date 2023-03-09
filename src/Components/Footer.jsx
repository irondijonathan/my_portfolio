import React from "react";
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  const brand = "Irondi Jonathan";
  const connect = "Connect with me on my socials";
  const socials = [
    <BsTwitter color="#f9004d" size={25} />,
    <BsGithub color="#f9004d" size={25} />,
    <BsInstagram color="#f9004d" size={25} />,
    <BsLinkedin color="#f9004d" size={25} />,
  ];
  const copyright = "CopyRight By Irondi Jonathan";
  return (
    <footer className="footer">
      <h2 style={{ color: "#f9004d" }}>{brand}</h2>
      <h3>{connect}</h3>
      <div className="socials">
        <span>{socials[0]}</span>
        <span>{socials[1]}</span>
        <span>{socials[2]}</span>
        <span>{socials[3]}</span>
      </div>
      <h3>{copyright}</h3>
    </footer>
  );
};

export default Footer;
