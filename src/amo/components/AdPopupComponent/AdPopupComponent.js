import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

// Import your images

// Import individual advertisement components
import VPNAd from './VPNAd';
import MonitorAd from './MonitorAd';
import PocketAd from './PocketAd';
import RelayAd from './RelayAd';
import FocusAd from './FocusAd';

const PopupManager = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (!isHovered) {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 0) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
            return 10; // Reset countdown to 10 seconds when reaching 0
          } else {
            return prevCountdown - 1;
          }
        });
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [isHovered]);

  const prevButtonHandler = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 5) % 5);
    setCountdown(10); // Reset countdown when changing ad
  };

  const closePopup = () => {
    // Handle popup close
  };

  const progress = ((10 - countdown) * 100) / 10;

  return (
    <div>
      <VPNAd
        display={currentIndex === 0 ? 'block' : 'none'}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        closePopup={closePopup}
        prevButtonHandler={prevButtonHandler}
        progress={progress}
      />
      <MonitorAd
        display={currentIndex === 1 ? 'block' : 'none'}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        closePopup={closePopup}
        prevButtonHandler={prevButtonHandler}
        progress={progress}
      />
      {/* Repeat for other ads */}
    </div>
  );
};

export default withRouter(PopupManager);
