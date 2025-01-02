import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 
import '../styles/ProgressBar.css';

const ProgressBar = ({ percentage }) => {
    const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    if (currentPercentage < percentage) {
      const interval = setInterval(() => {
        setCurrentPercentage((prev) => Math.min(prev + 1, percentage));
      }, 20); 

      return () => clearInterval(interval); // Nettoie l'intervalle
    }
  }, [currentPercentage, percentage]);
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-fill"
        style={{ width: `${currentPercentage}%` }}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
    percentage: PropTypes.number.isRequired
  };

export default ProgressBar;