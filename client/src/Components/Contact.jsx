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
      const response = await fetch("https://server-production-ea9f.up.railway.app/api/contact", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
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
    <section id="contact" className="bg-[#0f172a] text-white py-12 px-4 md:px-6 font-mono">
      <h2 className="text-3xl font-bold text-center mb-2 text-cyan-400">Get in Touch</h2>
      
      <p className="text-center text-sm text-gray-400 mb-6 hidden sm:block">
        <span className="text-cyan-300">
          <Typewriter
            words={["Let’s Connect & Code Something Cool"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </p>

      <div className="max-w-md mx-auto bg-[#0d1117] border border-cyan-700 p-6 rounded shadow-sm">
        <form className="space-y-3 text-sm" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="w-full p-2 bg-[#0f172a] border border-cyan-700 text-cyan-200 placeholder:text-cyan-500 focus:outline-none"
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="w-full p-2 bg-[#0f172a] border border-cyan-700 text-cyan-200 placeholder:text-cyan-500 focus:outline-none"
          />
          <input
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject"
            className="w-full p-2 bg-[#0f172a] border border-cyan-700 text-cyan-200 placeholder:text-cyan-500 focus:outline-none"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Message"
            rows={4}
            className="w-full p-2 bg-[#0f172a] border border-cyan-700 text-cyan-200 placeholder:text-cyan-500 focus:outline-none resize-none"
          />
          <button
            type="submit"
            className="bg-cyan-700 text-black px-4 py-2 font-semibold hover:bg-cyan-500 transition w-full"
          >
            Send
          </button>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
