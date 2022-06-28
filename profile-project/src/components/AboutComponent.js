import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media
} from "reactstrap";
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

import { Link } from "react-router-dom";

function About(props) {
  return (
    <div className="container">
      <div class="hero-section" id="top">
        <div class="hero-content-container">
          <h1>Hey there, I’m Your Mum</h1>
          <h2>Full stack developer from Philadelphia, Pennsylvania</h2>
        </div>
      </div>
      <hr />

      <div class="info-section" id="about">
        <div class="about-section">
          <h2>About Me</h2>
          <p>
            We present a curated database of the best campsites in the vast
            woods and backcountry of the World Wide Web Wilderness. We increase
            access to adventure for the public while promoting safe and
            respectful use of resources. The expert wilderness trekkers on our
            staff personally verify each campsite to make sure that they are up
            to our standards. We also present a platform for campers to share
            reviews on campsites they have visited with each other.
          </p>
        </div>
        <hr />

        <div class="skills-section" id="skills">
          <h2>Skills</h2>
          <div class="skill">
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
