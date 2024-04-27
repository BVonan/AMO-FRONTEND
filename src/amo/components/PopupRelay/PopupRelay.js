import React from 'react';
import PropTypes from 'prop-types';
import MozillaRelayImage from './img/mozilla-relay.svg';

const PopupRelay = ({ display, onMouseEnter, onMouseLeave, closePopup, prevButtonHandler, progress }) => {
    
    const RelayAdText = 'Protect your real email address to help control your inbox.';

  return (
    <div
        id="mozilla-relay" className="popup" style={{ display }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="popup-content4">
          <button className="closebtn" id="close-chat4" onClick={closePopup}>X</button>
          <button id="prevButton4" className="toggleButton" onClick={prevButtonHandler}>Previous Ad</button>
          <div className="progress-bar-container">
        <div className="progress-bar4" style={{ width: `${progress}%` }}/></div>
          <div className="ad-area4">
            <div id="ad-view4">
              <img className="relay-ad-pic" src={MozillaRelayImage} alt="mozilla-relay-ad" />
              <div className="text4">
                <h5><b>{RelayAdText}</b></h5>
              </div>
            </div>
            <a href="https://relay.firefox.com/">
              <button className="button-80" role="button">Get Firefox Relay</button>
            </a>
          </div>
        </div>
      </div>
  );
};

PopupRelay.propTypes = {
  display: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
  prevButtonHandler: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
};

export default PopupRelay;