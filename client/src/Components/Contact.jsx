// src/Components/Contact.jsx
import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully 🚀");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(`Error: ${data.message}`);
      }
    } catch (err) {
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <section id="contact" className="bg-[#0f172a] text-white py-20 px-6 md:px-20 font-mono">
      <h2 className="text-4xl font-bold text-center mb-4 text-cyan-400">Contact Me</h2>
      <p className="text-center text-md text-gray-400 mb-10">
        <span className="text-cyan-300">
          <Typewriter
            words={[" Let’s Connect & Code Something Cool "]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </p>

      <div className="max-w-4xl mx-auto bg-[#0d1117] border border-cyan-700 p-10 rounded-none shadow-md">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-1">Name:</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#0f172a] border border-cyan-700 text-cyan-200 placeholder:text-cyan-500 focus:outline-none"
              placeholder="Your name..."
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email:</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#0f172a] border border-cyan-700 text-cyan-200 placeholder:text-cyan-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Subject:</label>
            <input
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#0f172a] border border-cyan-700 text-cyan-200 placeholder:text-cyan-500 focus:outline-none"
              placeholder="Subject..."
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 h-40 bg-[#0f172a] border border-cyan-700 text-cyan-200 placeholder:text-cyan-500 focus:outline-none"
              placeholder="Type your message..."
            />
          </div>
          <button
            type="submit"
            className="bg-cyan-700 text-black px-6 py-2 font-bold hover:bg-cyan-500 transition w-full border-none shadow-sm"
          >
            Send Message
          </button>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
