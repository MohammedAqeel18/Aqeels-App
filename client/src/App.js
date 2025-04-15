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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isSplashDone]);

  if (!isSplashDone) {
    return <SplashScreen onFinish={() => setIsSplashDone(true)} />;
  }

  return (
    <>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="education"><Education /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <Footer />
      <ScrollToTopButton />

    </>
  );
};

export default App;
