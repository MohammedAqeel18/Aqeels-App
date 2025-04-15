import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

const LanguageRing = ({ percent, name, color }) => {
  const [progress, setProgress] = useState(0);
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;

  // ⬇️ Setup the intersection observer trigger
  const ref = React.useRef(null);
  const inView = useInView(ref, { triggerOnce: false }); // 👈 Trigger every time it enters

  useEffect(() => {
    if (inView) {
      let current = 0;
      const speed = 15;
      const increment = percent / (1000 / speed);
      const timer = setInterval(() => {
        current += increment;
        if (current >= percent) {
          current = percent;
          clearInterval(timer);
        }
        setProgress(current);
      }, speed);
      return () => clearInterval(timer);
    } else {
      setProgress(0); // 👈 Reset when it's out of view
    }
  }, [inView, percent]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center transition-transform transform hover:scale-105 duration-300"
    >
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#1e293b"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{
            strokeDashoffset,
            transition: 'stroke-dashoffset 0.2s ease-out',
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="text-center mt-2">
        <p className="text-lg text-white font-bold">{name}</p>
        <p className="text-sm text-blue-300">{Math.round(progress)}% Fluent</p>
      </div>
    </div>
  );
};

export default LanguageRing;
