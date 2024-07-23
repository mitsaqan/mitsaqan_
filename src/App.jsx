import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Works from "./components/Works";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-8 ">
        <Hero />
        <Projects />
        <Works />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
