// src/Components/Skills.jsx
import React from 'react';
import {
  FaJs, FaReact, FaHtml5,  FaTypeScript, FaTailwindCss, FaCss3Alt, FaGitAlt, FaGithub, FaBootstrap,
  FaNodeJs, 
} from 'react-icons/fa';
import {
  SiMongodb, SiFigma, SiLatex, SiCanva,
} from 'react-icons/si';
import vsCodeLogo from '../assets/vscode.png';
import netbeansLogo from '../assets/netbeans.png';
import postmanLogo from '../assets/postman.png';
import LanguageRing from './LanguageRing';
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { TbBrandNetbeans } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";


const Section = ({ title, skills }) => (
  <div className="glass-card p-6 rounded-2xl shadow-lg bg-opacity-10 backdrop-blur-md border border-blue-500 hover:border-blue-300 transition-all duration-300">
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <div className="flex flex-wrap gap-4">
      {skills.map(({ icon, img, name }) => (
        <div
          key={name}
          className="w-16 h-16 flex flex-col items-center justify-center text-center group relative"
        >
          <div className="text-3xl text-blue-400 group-hover:scale-125 transition-transform duration-300">
            {icon ? icon : <img src={img} alt={name} className="w-10 h-10" />}
          </div>
          <span className="text-xs mt-1 text-gray-300">{name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Badge = ({ text }) => (
  <span className="bg-blue-500/20 text-blue-200 border border-blue-500 px-4 py-1 rounded-full text-sm font-medium shadow-md hover:scale-105 transition">
    {text}
  </span>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-b from-gray-900 via-gray-950 to-black py-20 px-6 md:px-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-16 text-blue-400 tracking-wide"> Skills Set</h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <Section
          title="Programming Languages"
          skills={[
         { icon: <FaJs />, name: 'JavaScript' },
          { icon: <FaJava />, name: 'Java' },

            { icon: <FaHtml5 />, name: 'HTML' },
            { icon: <FaCss3Alt />, name: 'CSS' },
          ]}
        />
        <Section
          title=" Libraries & Frameworks "
          skills={[
           
            { icon: <FaReact />, name: 'React.js' },
            { icon: <RiNextjsFill  />, name: 'Next.js' },
            { icon: <SiTypescript   />, name: 'Typescript' },
          { icon: <FaNodeJs />, name: 'Node.js' },
            { icon: <FaJs />, name: 'Express.js' },
             { icon: <FaBootstrap />, name: 'Bootstrap' },
            { icon: <RiTailwindCssFill  />, name: 'Tailwind ' },
          ]}
            
           
          
        />
        <Section
          title="Databases"
          skills={[
            { icon: <SiMongodb />, name: 'MongoDB' }, 
          ]}
        />
        <Section
          title="Version Control"
          skills={[
            { icon: <FaGitAlt />, name: 'Git' },
            { icon: <FaGithub />, name: 'GitHub' },
          ]}
        />

<Section
          title="Coding Environments"
          skills={[
            { icon: <VscVscode  />, name: 'Vs Code' },
            { icon: <SiPostman   />, name: 'Post Man' },
            { icon: <TbBrandNetbeans    />, name: ' NetBeans' },

          ]}
        />
        <Section
          title="Design & Tools"
          skills={[
            { icon: <SiFigma />, name: 'Figma' },
            { icon: <SiCanva />, name: 'Canva' },
            { icon: <SiLatex />, name: 'LaTeX' },

            
          ]}
        />
      
      </div>

      {/* Soft Skills */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold mb-4 text-blue-300">Soft Skills</h3>
        <div className="flex flex-wrap gap-3">
          {[
            'Communication',
            'Teamwork',
            'Problem Solving',
            'Critical Thinking',
            'Time Management',
            'Adaptability',
            'Emotional Intelligence',
          ].map((skill, idx) => (
            <Badge key={idx} text={skill} />
          ))}
        </div>
      </div>

   {/* Languages */}
<div className="mt-20">
  <h3 className="text-2xl font-bold mb-6 text-blue-300 text-center">Languages</h3>
  <div className="flex flex-wrap gap-10 justify-center">
    <LanguageRing name="Tamil" percent={100} color="#22d3ee" />
    <LanguageRing name="English" percent={95} color="#38bdf8" />
    <LanguageRing name="Sinhala" percent={95} color="#818cf8" />
  </div>
</div>
  
      </section>
    );
  }
export default Skills;
