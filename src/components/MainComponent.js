import React, { Component } from "react";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import About from "./AboutComponent";
class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>Hello world</h1>
        <About />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
