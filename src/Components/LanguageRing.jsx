import React from 'react';

const LanguageRing = ({ percent, name, color }) => {
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
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
          strokeDasharray={circumference + ' ' + circumference}
          style={{
            strokeDashoffset,
            transition: 'stroke-dashoffset 1s ease-out',
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="text-center mt-2">
        <p className="text-lg text-white font-bold">{name}</p>
        <p className="text-sm text-blue-300">{percent}% Fluent</p>
      </div>
    </div>
  );
};

export default LanguageRing;
