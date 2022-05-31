import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import '../App.css'

function Footer() {
  return (
      <div className="social-container">
                <div class = "social">
                    
                    <a
                        href="https://www.linkedin.com/in/patel786/"
                        className="linkedin"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>

                    <a
                        href="https://github.com/Nomal-patel?tab=following"
                        className="github"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" style=""/>   

                    </a>
                                           
                    <a href="https://twitter.com/Noman85896222" className="twitter">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                </div>
            </div>
  );
}

export default Footer;