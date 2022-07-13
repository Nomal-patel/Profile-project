import React, { Component } from "react";
import { Navbar } from "reactstrap";
import { Link } from "react-scroll";
class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar dark sticky="top" expand="md">
          <div className="nav-links">
            <ul id="thenav" className="nav">
            
            <li className="nav-item">
                <Link to="top" smooth={true} offset={-30} duration={300}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="about" smooth={true} offset={-40} duration={500}>
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link to="contact" smooth={true} offset={0} duration={500}>
                  Contact
                </Link>
              </li>

              <a className="nav-link" href="resume/Noman's Resume.pdf" download>
                Resume
              </a>

              
            </ul>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
