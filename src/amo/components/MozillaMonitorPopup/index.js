import React, { useEffect, useState } from 'react';
import { prevButtonHandler, closePopup } from '../PopupFunctions/index.js';
import MozillaMonitorImage from './img/Monitor_Icon.svg';
import MozillaMonitorAd from './img/monitor-ad.svg';
import './styles.scss'

const MozillaMonitor = ({ currentIndex, setCurrentIndex, setCountdown }) => {
    const VPNAdText = `Surf, stream and get work done on servers in over 30 countries 
    for a secure internet connection with a new perspective.`;
    const handlePrevButtonClick = () => {
        prevButtonHandler(currentIndex, setCurrentIndex, setCountdown);
      };
    
      // Function to handle the close button click
      const handleCloseButtonClick = () => {
        closePopup(currentIndex);
      };

    const progress = ((10 - countdown) * 100) / 10;
  
    return (
        <div id="mozilla-monitor" className="popup" style={{ display: currentIndex === 1 ? 'block' : 'none' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="popup-content2">
          <button className="closebtn" id="close-chat2" onClick={handleCloseButtonClick}>X</button>
          <button id="prevButton2" className="toggleButton" onClick={handlePrevButtonClick}>Previous Ad</button>
          <div className="progress-bar-container">
        <div className="progress-bar2" style={{ width: `${progress}%` }}/></div>
          <div className="ad-area2">
            <div className="ad-title2">
              <div className="title2">
                Mozilla Monitor
                <img className="monitor-logo" src={MozillaMonitorImage} alt="mozilla-monitor" />
              </div>
            </div>
            <div id="ad-view">
              <img className="monitor-ad-pic" src={MozillaMonitorAd} alt="mozilla-monitor-ad" />
              <div className="text2">
                <h5><b>{MonitorAdText}</b></h5>
              </div>
            </div>
            <a href="https://monitor.mozilla.org/?utm_source=www.mozilla.org&utm_medium=referral&utm_campaign=products">
              <button className="button-78" role="button">Check for Breaches NOW!</button>
            </a>
          </div>
        </div>
      </div>      
    );
  };
  
  export default MozillaMonitor;