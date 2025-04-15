import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onFinish }) => {
  const [text, setText] = useState('');
  const splashText = "> Connect with Aqeel's App";

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scroll

    let i = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + splashText.charAt(i));
      i++;

      if (i === splashText.length) {
        clearInterval(interval);
        setTimeout(() => {
          document.body.style.overflow = 'auto'; // Re-enable scroll
          onFinish && onFinish(); // Trigger callback to show app
        }, 1500);
      }
    }, 70);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'auto';
    };
  }, [onFinish]);

  return (
    <div className="bg-black text-green-400 font-mono h-screen w-screen flex flex-col items-center justify-center fixed top-0 left-0 z-[9999]">
      <p className="text-xl md:text-2xl tracking-widest">
        {text}
        <span className="animate-pulse">|</span>
      </p>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '160px' }}
        transition={{ duration: 2.5, ease: 'easeInOut', delay: 1 }}
        className="h-1 mt-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
      />
    </div>
  );
};

export default SplashScreen;
