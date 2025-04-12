import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <div className="bg-[#282c34] text-white flex items-center justify-center h-screen">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-4xl md:text-6xl font-extrabold"
      >
        Aqeel's App 🪶
      </motion.h1>
    </div>
  );
};

export default SplashScreen;
