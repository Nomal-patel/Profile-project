import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="social-container" id="contact">
      <h2> Contact me</h2>
      <div className="social">
        <ul className="footer" id="socials">
          <li className="socials">
            <a
              href="https://www.linkedin.com/in/patel786/"
              className="linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <h3>patel786</h3>
          </li>

          <li className="socials">
            <a
              href="https://github.com/Nomal-patel?tab=following"
              className="github"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <h3>Noman-Patel</h3>
          </li>

          <li className="socials">
            <a href="https://twitter.com/Noman85896222" className="twitter">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <h3>Noman85896222</h3>
          </li>

          <li className="socials">
            <a href="mailto:nomanpatel39424@gamil.com" className="google">
              <FontAwesomeIcon icon={faGoogle} size="2x" />
            </a>
            <h3>nomanpatel39424@gmail.com</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
