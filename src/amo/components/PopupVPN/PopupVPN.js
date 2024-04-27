import React from 'react';
import PropTypes from 'prop-types';
import MozillaVPNImage from './img/mozilla-vpn-brand.svg';
import MozillaVPNAd from './img/mozilla-vpn.svg';

const PopupVPN = ({ display, onMouseEnter, onMouseLeave, closePopup, prevButtonHandler, progress }) => {
  const VPNAdText = `Surf, stream and get work done on servers in over 30 countries 
  for a secure internet connection with a new perspective.`;

  return (
    <div id="mozilla-VPN" className="popup" style={{ display }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="popup-content1">
          <button className="closebtn close-chat" onClick={closePopup} >X</button>
          <button id="prevButton1" className="toggleButton" onClick={prevButtonHandler}>Previous Ad</button>
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

PopupVPN.propTypes = {
  display: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
  prevButtonHandler: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
};

export default PopupVPN;
