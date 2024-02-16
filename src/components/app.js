import React from "react";
import Header from "./Header";
import SideBar from "./SideBard";
import Welcome from "./Welcome";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer"

function App() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <SideBar />
      <Header />
      <Welcome />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer year={year} />
    </div>
  );
}

export default App;
