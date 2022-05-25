import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar dark sticky="top" expand="md">
          <div class="nav-links">
            <ul id="thenav" className="nav">
              <li class="nav-item">
                <a aria-current="page" class="nav-link" href="#garden">
                  contact
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/garden">
                  about
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/garden">
                  Projects
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/garden">
                  resume
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/garden">
                  Garden
                </a>
              </li>
            </ul>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;