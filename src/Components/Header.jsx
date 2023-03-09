import React from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { useState, useEffect } from "react";

const Header = () => {
  return (
    <div className="header">
      <Navbar
        firstLink="Home"
        secondLink="About Me"
        thirdLink="My Services"
        fourthLink="My Projects"
        fifthLink="Contact Me"
      />
      <Intro />
    </div>
  );
};

const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
      <h1>
        Portfo<span>lio</span>
      </h1>
      <ul className="links">
        <li>
          <a href="#">{props.firstLink}</a>
        </li>
        <li>
          <a href="#">{props.secondLink}</a>
        </li>
        <li>
          <a href="#">{props.thirdLink}</a>
        </li>
        <li>
          <a href="#">{props.fourthLink}</a>
        </li>
        <button id="general-btn">{props.fifthLink}</button>
      </ul>
      <div className="cinder__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="var(--primary-color)"
            size={30}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="var(--primary-color)"
            size={30}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="cinder__navbar-menu_container scale-up-center">
            <div className="cinder__navbar-menu_container-links">
              <div>
                <a className="paths" href={[props.firstLink]}>
                  {props.firstLink}
                </a>
              </div>
              <div>
                <a className="paths" href={props.secondLink}>
                  {props.secondLink}
                </a>
              </div>
              <div>
                <a className="paths" href={props.thirdLink}>
                  {props.thirdLink}
                </a>
              </div>
              <div>
                <a className="paths" href={props.fourthLink}>
                  {props.fourthLink}
                </a>
              </div>
              <div>
                <a className="paths" href={props.fifthLink}>
                  {props.fifthLink}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Intro = () => {
  const greeting = "Hello, my name is";
  const types = ["Freelancer", "Software Engineer", "Cloud Engineer"];
  const [typeIndex, setTypeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypeIndex((typeIndex + 1) % types.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [typeIndex]);
  return (
    <div className="intro">
      <h3 className="greet">{greeting}</h3>
      <h1>
        Irondi <span className="highlight-name">Jonathan</span>
      </h1>
      <h3 className="auto-type">
        I'm a{" "}
        <span key={types[typeIndex]} className="typed-text">
          {types[typeIndex]}
        </span>
        <span className="cursor">|</span>
      </h3>
      <div className="news">
        <input type="text" />
        <button id="start">Lets Talk</button>
      </div>
    </div>
  );
};

export default Header;
