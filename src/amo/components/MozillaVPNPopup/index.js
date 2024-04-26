import React, { useEffect, useState } from 'react';
import { prevButtonHandler, closePopup } from '../PopupFunctions/index.js';
import MozillaVPNImage from './img/mozilla-vpn-brand.svg';
import MozillaVPNAd from './img/mozilla-vpn.svg';
import './styles.scss'

const MozillaVPN = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [countdown, setCountdown] = useState(10);

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
        <div id="mozilla-VPN" className="popup" style={{ display: currentIndex === 0 ? 'block' : 'none' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div className="popup-content1">
          <button className="closebtn close-chat" onClick={handleCloseButtonClick} >X</button>
          <button id="prevButton1" className="toggleButton" onClick={handlePrevButtonClick}>Previous Ad</button>
          <div className="progress-bar-container">
        <div className="progress-bar1" style={{ width: `${progress}%` }}/></div>
          <div className="ad-area1">
            <div className="ad-title1">
              <div className="title1">
                <img className="VPN-logo" src={MozillaVPNImage} alt="mozilla-vpn" />
              </div>
            </div>
            <div id="ad-view">
              <img className="VPN-ad-pic" src={MozillaVPNAd} alt="mozilla-vpn-ad" />
              <div className="text1">
                <h5><b>{VPNAdText}</b></h5>
              </div>
            </div>
            <a href="https://www.mozilla.org/en-US/products/vpn/">
              <button className="button-77" role="button">Get Mozilla VPN</button>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default MozillaVPN;