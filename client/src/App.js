import React, { useState, useEffect } from 'react';
import SplashScreen from './Components/SplashScreen';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ScrollToTopButton from './Components/ScrollToTopButton';

const App = () => {
  const [isSplashDone, setIsSplashDone] = useState(false);

  useEffect(() => {
    if (isSplashDone) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      const hiddenSections = document.querySelectorAll('.hidden-until-scroll');
      hiddenSections.forEach((el) => observer.observe(el));
    }
  }, [isSplashDone]);

  if (!isSplashDone) {
    return <SplashScreen onFinish={() => setIsSplashDone(true)} />;
  }

  return (
    <>
      <Navbar />

      <section id="home" className="hidden-until-scroll"><Home /></section>
      <section id="education" className="hidden-until-scroll"><Education /></section>
      <section id="skills" className="hidden-until-scroll"><Skills /></section>
      <section id="projects" className="hidden-until-scroll"><Projects /></section>
      <section id="contact" className="hidden-until-scroll"><Contact /></section>

      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default App;
