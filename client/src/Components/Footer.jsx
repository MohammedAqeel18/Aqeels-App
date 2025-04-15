import React from 'react';
import { FaGithub, FaLinkedin,FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-8 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-700 pt-6">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold text-white">Aqeel's App</h4>
        </div>

        {/* Center Links */}
        <ul className="flex gap-6 text-sm">
          <li className="hover:text-blue-400 transition cursor-pointer"><a href="#home">Home</a></li>
          <li className="hover:text-blue-400 transition cursor-pointer"><a href="#skills">Skills</a></li>
          <li className="hover:text-blue-400 transition cursor-pointer"><a href="#projects">Projects</a></li>
          <li className="hover:text-blue-400 transition cursor-pointer"><a href="#contact">Contact</a></li>
        </ul>

        {/* Right Socials */}
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

      <p className="text-center text-xs mt-6 text-gray-500">&copy; {new Date().getFullYear()} Mohammed Aqeel. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
