import React from 'react';
import Education from './Components/Education';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <Navbar />

      {/* Section Wrappers with IDs for scroll navigation */}
      <section id="home">
        <Home />
      </section>
      <section id="education">
        <Education />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />

    </>
  );
};

export default App;
