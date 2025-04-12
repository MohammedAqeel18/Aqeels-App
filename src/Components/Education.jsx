import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-gray-950 text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* University Logo */}
        <div className="flex-shrink-0">
          <img
            src="/logo.jpg" // Place your logo in /public folder
            alt="Uva Wellassa University"
            className="w-32 h-32 object-contain rounded-xl shadow-md bg-white p-2"
          />
        </div>

        {/* Education Info */}
        <div className="flex-1 text-center md:text-left space-y-3">
          <div className="flex items-center justify-center md:justify-start gap-2 text-blue-500 text-xl font-semibold">
            <GraduationCap className="w-6 h-6" />
            Final Year Student
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-blue-400">
            Uva Wellassa University of Sri Lanka
          </h2>
          <p className="text-lg text-gray-300">
            Faculty of Applied Sciences <br />
            Department of Computer Science and Informatics
          </p>
          <p className="text-md font-medium text-gray-400 italic">
             Bsc Honors in  Industrial Information Technology 
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
