import React from "react";
import { Navbar, Hero, About, Projects, Contact, Footer } from "./components";

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
