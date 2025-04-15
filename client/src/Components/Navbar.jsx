import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'education' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'projects' },
    { id: 5, link: 'contact' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#282c34] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Apply in your component */}
{/* Apply in your component */}
<h1
  className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 tracking-wider"
  style={{ fontFamily: "'Kaushan Script', cursive" }}
>
  Aqeel's App
</h1>




        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {links.map(({ id, link }) => (
            <li key={id} className="cursor-pointer hover:text-blue-400 transition-colors duration-300">
              <Link to={link} smooth duration={500} offset={-70}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden z-10 cursor-pointer" onClick={() => setNav(!nav)}>
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {/* Mobile Nav */}
        {nav && (
          <ul className="absolute top-16 left-0 w-full bg-[#282c34] flex flex-col items-center py-6 space-y-6 md:hidden">
            {links.map(({ id, link }) => (
              <li key={id} className="text-lg hover:text-blue-400" onClick={() => setNav(false)}>
                <Link to={link} smooth duration={500} offset={-70}>
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
