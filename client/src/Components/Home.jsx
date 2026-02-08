import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
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
              'Computer Science Graduate',
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
          Aspiring Computer Science student passionate about software engineering,
          dedicated to building innovative, responsive, and user-friendly web applications.
          Deeply enthusiastic about researching emerging technologies, exploring AI,
          scalable backend systems, and modern software design.
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mb-6">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold transition"
          >
            Contact Me
          </a>
          <a
            href="/CV.pdf"
            download
            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 font-semibold transition"
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
      <div className="relative w-56 h-61 bg-gray-800 overflow-hidden group shadow-lg">
        <img
          src="/profile.jpeg"
          alt="Aqeel"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Corner Lines */}
        <div className="absolute top-0 left-0 w-12 h-0.5 bg-blue-500"></div>
        <div className="absolute top-0 left-0 w-0.5 h-12 bg-blue-500"></div>
        <div className="absolute bottom-0 right-0 w-12 h-0.5 bg-blue-500"></div>
        <div className="absolute bottom-0 right-0 w-0.5 h-12 bg-blue-500"></div>
      </div>
    </motion.section>
  );
};

export default Home;
