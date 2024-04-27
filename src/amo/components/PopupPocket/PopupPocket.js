import React from 'react';
import PropTypes from 'prop-types';
import MozillaPocketImage from './img/pocket.png';
import MozillaPocketAd from './img/mozilla-pocket.svg';

const PopupPocket = ({ display, onMouseEnter, onMouseLeave, closePopup, prevButtonHandler, progress }) => {
    const PocketAdText =
    'Over 10 million users rely on Pocket to discover and savor the best articles, news, stories and videos. And as a member of the Firefox family, privacy is paramount.';
 

  return (
    <div
        id="mozilla-pocket" className="popup" style={{ display }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="popup-content3">
          <button className="closebtn" id="close-chat3" onClick={closePopup}>X</button>
          <button id="prevButton3" className="toggleButton" onClick={prevButtonHandler}>Previous Ad</button>
          <div className="progress-bar-container">
        <div className="progress-bar3" style={{ width: `${progress}%` }}/></div>
          <div className="ad-area3">
            <div className="ad-title3">
              <div className="title3">
                <img className="pocket-logo" src={MozillaPocketImage} alt="mozilla-pocket" />
              </div>
            </div>
            <div id="ad-view">
              <img className="pocket-ad-pic" src={MozillaPocketAd} alt="mozilla-pocket-ad" />
              <div className="text3">
                <h5><b>{PocketAdText}</b></h5>
              </div>
            </div>
            <a href="https://getpocket.com/en/pocket-and-firefox/?utm_source=www.mozilla.org&utm_medium=referral&utm_campaign=products">
              <button className="button-79" role="button">Explore Pocket</button>
            </a>
          </div>
        </div>
      </div>
  );
};

PopupPocket.propTypes = {
  display: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
  prevButtonHandler: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
};

export default PopupPocket;