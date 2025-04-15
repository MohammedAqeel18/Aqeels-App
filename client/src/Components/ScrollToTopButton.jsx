import { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    visible && (
      <div className="fixed bottom-6 right-6 z-50 cursor-pointer">
        <FaArrowCircleUp
          onClick={scrollToTop}
          className="text-blue-500 hover:text-white-700 text-4xl transition-all duration-300 hover:scale-110"
        />
      </div>
    )
  );
};

export default ScrollToTopButton;
