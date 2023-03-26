import React from "react";
import { Navbar, Hero, About, Projects, Contact, Footer } from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
