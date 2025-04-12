import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0f172a] text-white py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Contact Me</h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-400 text-2xl" />
            <span className="text-gray-300 text-lg">aqeelworkmail@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-400 text-2xl" />
            <span className="text-gray-300 text-lg">+94 764175277</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-400 text-2xl" />
            <span className="text-gray-300 text-lg">Polonnaruwa, Sri Lanka</span>
          </div>


        </div>

        {/* Contact Form */}
        <form className="bg-[#1e293b] p-6 rounded-lg shadow-md space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-[#0f172a] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-[#0f172a] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

<input
            type="text"
            placeholder="Subject"
            className="w-full bg-[#0f172a] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full bg-[#0f172a] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
