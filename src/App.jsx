import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      
    </div>
  );
};

export default App;
