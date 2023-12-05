import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";

function Homepage() {
  return (
    <div className="w-full min-h-full">
      <Main />
      <About />
      <Contact />
    </div>
  );
}

export default Homepage;
