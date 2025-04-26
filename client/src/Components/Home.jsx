import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <SplashScreen />;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 py-16 bg-[#282c34] text-white overflow-hidden"
    >
      {/* SVG Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#3b82f6"
            fillOpacity="0.4"
            d="M0,224L60,229.3C120,235,240,245,360,234.7C480,224,600,192,720,181.3C840,171,960,181,1080,186.7C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      {/* Left Side Text */}
      <div className="text-center md:text-left max-w-xl z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
           I'm <span className="text-blue-500">Aqeel</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-4">
          <Typewriter
            words={[
              'Emerging Software Engineer',
              'Tech Enthusiast',
              'Computer Science Enthusiast',
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-md text-gray-400 mb-6 leading-relaxed">
        Aspiring Computer Science student passionate about software engineering, dedicated to building innovative, 
        responsive, and user-friendly web applications. Deeply enthusiastic about researching emerging technologies, exploring AI, scalable backend systems, and modern software design
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mb-6">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition"
          >
            Contact Me
          </a>
          <a
            href="/CV.pdf"
            download
            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-full font-semibold transition"
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 text-2xl text-gray-300">
          <a
            href="https://github.com/MohammedAqeel18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-aqeel-617025341"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=100081105115139"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="mb-8 md:mb-0 z-10">
        <img
          src="/profile.png"
          alt="Aqeel"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform"
        />
      </div>
    </motion.section>
  );
};

export default Home;
