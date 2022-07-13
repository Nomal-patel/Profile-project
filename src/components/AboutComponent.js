import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faLinux,
  faHtml5,
  faCss3,
  faJs,
  faSass,
  faBootstrap,
  faNodeJs,
  faPython,
  faRProject,
  faJava
  
} from "@fortawesome/free-brands-svg-icons";

function About(props) {
  return (
    <div className="container">
      <div className="hero-section" id="top">
        <div className="hero-content-container">
          <h1>Hey there, I’m Noman Patel</h1>
          <h2>Full stack developer from Philadelphia, Pennsylvania</h2>
        </div>
      </div>
      <hr />

      <div className="info-section" id="about">
        <div className="about-section">
          <h2>About Me</h2>
          <p>
            I have been pursuing computer science for 4 years. Becuase of my 
            curious nature I never stuck at one language or field and tried
            out everything although currently I'm sticking with Web Development.
            Up until now I've been working as a freelancer from small buissness owners 
            to sophomores in college. I'm currently looking for an opportunity to apply
            my skills professionally.
          </p>
        </div>
        <hr />

        <div className="skills-section" id="skills">
          <h2>Skills</h2>
          <div className="skill">
            <a href="https://www.linux.org/" className="linux">
              <FontAwesomeIcon icon={faLinux} size="2x" />
            </a>

            <a href="https://reactjs.org/" className="react">
              <FontAwesomeIcon icon={faReact} size="2x" />
            </a>

            <a href="https://reactjs.org/" className="html">
              <FontAwesomeIcon icon={faHtml5} size="2x" />
            </a>

            <a
              href="https://www.w3.org/Style/CSS/Overview.en.html"
              className="css"
            >
              <FontAwesomeIcon icon={faCss3} size="2x" />
            </a>

            <a href="https://www.javascript.com/" className="js">
              <FontAwesomeIcon icon={faJs} size="2x" />
            </a>

            <a href="https://sass-lang.com/" className="sass">
              <FontAwesomeIcon icon={faSass} size="2x" />
            </a>

            <a href="https://getbootstrap.com/" className="bootstrap">
              <FontAwesomeIcon icon={faBootstrap} size="2x" />
            </a>

            <a href="https://nodejs.org/en/" className="nodejs">
              <FontAwesomeIcon icon={faNodeJs} size="2x" />
            </a>

            <a href="https://www.r-project.org/" className="R">
            <FontAwesomeIcon icon={faRProject} size="2x" />
            </a>

            <a href="https://www.python.org/" className="python">
            <FontAwesomeIcon icon={faPython} size="2x" />
            </a>
            
            <a href="https://www.java.com/en/" className="Java">
            <FontAwesomeIcon icon={faJava} size="2x" />
            </a>

           

            
          </div>
        </div>
        
        <hr />

      </div>
    </div>
  );
}

export default About;
