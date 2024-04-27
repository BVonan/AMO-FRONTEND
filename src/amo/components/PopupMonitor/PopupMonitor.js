import React from 'react';
import PropTypes from 'prop-types';
import MozillaMonitorImage from './img/Monitor_Icon.svg';
import MozillaMonitorAd from './img/monitor-ad.svg';

const PopupMonitor = ({ display, onMouseEnter, onMouseLeave, closePopup, prevButtonHandler, progress }) => {
    const MonitorAdText =
    'See if you’ve been part of a data breach. If so, let us automatically get your private info back for you and continually monitor your identity for new leaks.';
 

  return (
    <div id="mozilla-monitor" className="popup" style={{ display }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <div className="popup-content2">
      <button className="closebtn" id="close-chat2" onClick={closePopup}>X</button>
      <button id="prevButton2" className="toggleButton" onClick={prevButtonHandler}>Previous Ad</button>
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

PopupMonitor.propTypes = {
  display: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
  prevButtonHandler: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
};

export default PopupMonitor;