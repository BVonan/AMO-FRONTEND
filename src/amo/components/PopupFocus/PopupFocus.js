import React from 'react';
import PropTypes from 'prop-types';
import MozillaFocusImage from './img/mozilla-focus.jpg';

const PopupFocus = ({ display, onMouseEnter, onMouseLeave, closePopup, prevButtonHandler, progress }) => {
    
    const FocusAdText = 'Your dedicated privacy browser with automatic tracking protection and ad blocking.';

  return (
    <div id="mozilla-focus" className="popup" style={{ display }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="popup-content5">
          <button className="closebtn" id="close-chat5"onClick={closePopup}>X</button>
          <button id="prevButton5" className="toggleButton" onClick={prevButtonHandler}>Previous Ad</button>
          <div className="progress-bar-container">
        <div className="progress-bar5" style={{ width: `${progress}%` }}/></div>
          <div className="ad-area5">
            <div id="ad-view5">
              <img className="monitor-ad-pic" src={MozillaFocusImage} alt="mozilla-focus-ad" />
              <div className="text5">
                <h5><b>{FocusAdText}</b></h5>
              </div>
            </div>
            <a href="https://www.mozilla.org/en-US/firefox/browsers/mobile/focus/">
              <button className="button-81" role="button">Get Firefox Focus</button>
            </a>
          </div>
        </div>
      </div> 
  );
};

PopupFocus.propTypes = {
  display: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
  prevButtonHandler: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
};

export default PopupFocus;