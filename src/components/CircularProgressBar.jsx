import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/CircularProgressBar.css';

const CircularProgressBar = ({ targetPercentage, cercleName }) => {
    const size = 250
    const strokeWidth = 40
  const [currentPercentage, setCurrentPercentage] = useState(0);

  const radius = (size - strokeWidth) / 2; // Rayon du cercle
  const circumference = 2 * Math.PI * radius; // Circonférence du cercle

  const progressOffset = circumference - (currentPercentage / 100) * circumference;

  useEffect(() => {
    if (currentPercentage < targetPercentage) {
      const interval = setInterval(() => {
        setCurrentPercentage((prev) => Math.min(prev + 1, targetPercentage));
      }, 20); // Augmente de 1% toutes les 20ms

      return () => clearInterval(interval);
    }
  }, [currentPercentage, targetPercentage]);

  return (
    <div className="circular-progress-bar">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="progress-svg"
      >
        {/* Cercle de fond */}
        <circle
          className="progress-bg"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        {/* Cercle de progression */}
        <circle
          className="progress-circle"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
        />
      </svg>
      {/* Texte central */}
      <div className="progress-text">
        {cercleName}
      </div>
    </div>
  );
};

// Validation des props
CircularProgressBar.propTypes = {
  targetPercentage: PropTypes.number.isRequired, // Pourcentage cible
  cercleName: PropTypes.text, // Taille du SVG
};


export default CircularProgressBar;
