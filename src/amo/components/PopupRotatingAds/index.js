import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import './styles.scss';
import MozillaVPNImage from './img/mozilla-vpn-brand.svg';
import MozillaVPNAd from './img/mozilla-vpn.svg';
import MozillaMonitorImage from './img/Monitor_Icon.svg';
import MozillaMonitorAd from './img/monitor-ad.svg';
import MozillaFocusImage from './img/mozilla-focus.jpg';
import MozillaPocketImage from './img/pocket.png';
import MozillaPocketAd from './img/mozilla-pocket.svg';
import MozillaRelayImage from './img/mozilla-relay.svg';



const PopupManager = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
      }
    }, 5000);

    return () => clearInterval(timerInterval);
  }, [isHovered]);

  const prevButtonHandler = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 5) % 5);
  };

  const VPNAdText = `Surf, stream and get work done on servers in over 30 countries 
for a secure internet connection with a new perspective.`;
const MonitorAdText = 'See if you’ve been part of a data breach. If so, let us automatically get your private info back for you and continually monitor your identity for new leaks.';
const PocketAdText = 'Over 10 million users rely on Pocket to discover and savor the best articles, news, stories and videos. And as a member of the Firefox family, privacy is paramount.';
const RelayAdText = 'Protect your real email address to help control your inbox.';
const FocusAdText = 'Your dedicated privacy browser with automatic tracking protection and ad blocking.';


  return (
    
      <div>
       <div id="mozilla-monitor" className="popup" style={{ display: currentIndex === 0 ? 'block' : 'none' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div className="popup-content">
          <button className="closebtn close-chat">X</button>
          <button id="prevButton1" className="toggleButton" onClick={prevButtonHandler}>Previous Ad</button>
          <div className="ad-area">
            <div className="ad-title">
              <div className="title">
                <img className="monitor-logo" src={MozillaVPNImage} alt="mozilla-vpn" />
              </div>
            </div>
            <div id="ad-view">
              <img className="monitor-ad-pic" src={MozillaVPNAd} alt="mozilla-vpn-ad" />
              <div className="text">
                <h5><b>{VPNAdText}</b></h5>
              </div>
            </div>
            <a href="https://www.mozilla.org/en-US/products/vpn/">
              <button className="button-77" role="button">Get Mozilla VPN</button>
            </a>
          </div>
        </div>
      </div>
     
      
      <div id="mozilla-monitor" className="popup" style={{ display: currentIndex === 1 ? 'block' : 'none' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="popup-content2">
          <button className="closebtn" id="close-chat2">X</button>
          <button id="prevButton2" className="toggleButton" onClick={prevButtonHandler}>Previous Ad</button>
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
      
      <div
        id="mozilla-pocket"
        className="popup"
        style={{ display: currentIndex === 2 ? 'block' : 'none' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="popup-content">
          <button className="closebtn" id="close-chat3">X</button>
          <button id="prevButton3" className="toggleButton" onClick={prevButtonHandler}>Previous Ad</button>
          <div className="ad-area">
            <div className="ad-title">
              <div className="title">
                <img className="monitor-logo" src={MozillaPocketImage} alt="mozilla-pocket" />
              </div>
            </div>
            <div id="ad-view">
              <img className="monitor-ad-pic" src={MozillaPocketAd} alt="mozilla-pocket-ad" />
              <div className="text">
                <h5><b>{PocketAdText}</b></h5>
              </div>
            </div>
            <a href="https://getpocket.com/en/pocket-and-firefox/?utm_source=www.mozilla.org&utm_medium=referral&utm_campaign=products">
              <button className="button-79" role="button">Explore Pocket</button>
            </a>
          </div>
        </div>
      </div>

     
      <div
        id="mozilla-relay"
        className="popup"
        style={{ display: currentIndex === 3 ? 'block' : 'none' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="popup-content">
          <button className="closebtn" id="close-chat4">X</button>
          <button id="prevButton4" className="toggleButton" onClick={prevButtonHandler}>Previous Ad</button>
          <div className="ad-area">
            <div id="ad-view">
              <img className="monitor-ad-pic" src={MozillaRelayImage} alt="mozilla-relay-ad" />
              <div className="text">
                <h5><b>{RelayAdText}</b></h5>
              </div>
            </div>
            <a href="https://relay.firefox.com/">
              <button className="button-80" role="button">Get Firefox Relay</button>
            </a>
          </div>
        </div>
      </div>

      
      <div
        id="mozilla-focus"
        className="popup"
        style={{ display: currentIndex === 4 ? 'block' : 'none' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="popup-content">
          <button className="closebtn" id="close-chat5">X</button>
          <button id="prevButton5" className="toggleButton" onClick={prevButtonHandler}>Previous Ad</button>
          <div className="ad-area">
            <div id="ad-view">
              <img className="monitor-ad-pic" src={MozillaFocusImage} alt="mozilla-focus-ad" />
              <div className="text">
                <h5><b>{FocusAdText}</b></h5>
              </div>
            </div>
            <a href="https://www.mozilla.org/en-US/firefox/browsers/mobile/focus/">
              <button className="button-81" role="button">Get Firefox Focus</button>
            </a>
          </div>
        </div>
      </div> 
    </div>
    
  );
};

export default PopupManager;
