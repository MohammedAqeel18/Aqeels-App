import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql, SiPhp, SiTailwindcss, SiPostgresql} from 'react-icons/si';
import hospitalImg from '../assets/hospital.png';
import quizImg from '../assets/quiz.png';
import futsalImg from '../assets/futsal.png';
import portfolioImg from '../assets/portfolio.jpg';
import { FaGlobe } from 'react-icons/fa';
import techdashlyImg from '../assets/techdashly.jpg';
import { RiNextjsFill } from 'react-icons/ri';
const techIconStyle = 'text-xl text-blue-400 hover:text-blue-600 transition';

const projects = [
  {
    name: 'Hospital Management System',
    img: hospitalImg,
    description: 'Responsive hospital booking platform with doctor guidance features.',
    tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    github: 'https://github.com/MohammedAqeel18/Care-Plus---Hospital-System',
  },
  {
    name: 'Online Quiz Application System',
    img: quizImg,
    description: 'Quiz web app using PHP and MySQL with a clean frontend UI.',
    tech: [<SiPhp />, <SiMysql />, <FaHtml5 />, <FaCss3Alt />, <FaJs />],
    github: 'https://github.com/MohammedAqeel18/Quizzify---Online-Quiz-Website',
  },
  {
    name: 'Indoor Futsal Booking System',
    img: futsalImg,
    description: 'MERN stack app for booking futsal courts and managing slots.',
    tech: [<FaReact />, <SiExpress />, <FaNodeJs />, <SiMongodb />],
    github: 'https://github.com/MohammedAqeel18/Futsal-World',
  },
  {
    name: 'Aqeels-App - Personal Portfolio',
    img: portfolioImg,
    description: 'Personal portfolio built with MERN Stack and styled using Tailwind CSS.',
    tech: [<FaReact />, <SiExpress />, <FaNodeJs />, <SiMongodb />, <SiTailwindcss />],
    github: 'https://github.com/MohammedAqeel18/Aqeels-App',
  },
  {
    name: 'TechDashly - Find your career paths ',
    img: techdashlyImg,
    description: 'Career guidance web application for Computer Science / IT students',
    tech: [<RiNextjsFill /> , <FaNodeJs/>, <SiExpress/> , <SiPostgresql/> , <SiTailwindcss/>],
    github: 'https://github.com/MohammedAqeel18/TechDashly',
  }
  
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0f172a] text-white py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">My Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1e293b] shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 h-[400px] flex flex-col justify-between"
          >
            <img src={project.img} alt={project.name} className="w-full h-55 object-cover" />
            <div className="p-6 flex flex-col justify-between h-full">
              <h3 className="text-2xl font-semibold mb-2 text-blue-300">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-3 flex-wrap items-center text-white">
                {project.tech.map((icon, i) => (
                  <span key={i} className={techIconStyle}>{icon}</span>
                ))}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="ml-auto text-white hover:text-blue-400 transition"
                  >
                    <FaGithub size={22} />
                  </a>
                )}
                {project.Website && (
                  <a
                    href={project.Website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Website"
                    className="ml-auto text-white hover:text-blue-400 transition"
                  >
                    <FaGlobe size={22} />
                  </a>
                )}

              </div>
            </div>
          </div>
        ))}

     
        </div>
    </section>
  );
};

export default Projects;
