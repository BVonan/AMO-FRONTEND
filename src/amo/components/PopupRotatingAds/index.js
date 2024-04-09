import React, { useEffect, useState } from 'react';
import './styles.scss';
import MozillaVPNImage from './img/mozilla-vpn-brand.svg';
import MozillaVPNAd from './img/mozilla-vpn.svg';
import MozillaMonitorImage from './img/Monitor_Icon.svg';
import MozillaMonitorAd from './img/monitor-ad.svg';
import MozillaFocusImage from './img/mozilla-focus.jpg';
import MozillaPocketImage from './img/pocket.png';
import MozillaPocketAd from './img/mozilla-pocket.svg';
import MozillaRelayImage from './img/mozilla-relay.svg';

const VPNAdText = `Surf, stream and get work done on servers in over 30 countries for a secure internet connection with a new perspective.`;
const MonitorAdText = 'See if you’ve been part of a data breach. If so, let us automatically get your private info back for you and continually monitor your identity for new leaks.';
const PocketAdText = 'Over 10 million users rely on Pocket to discover and savor the best articles, news, stories and videos. And as a member of the Firefox family, privacy is paramount.';
const RelayAdText = 'Protect your real email address to help control your inbox.';
const FocusAdText = 'Your dedicated privacy browser with automatic tracking protection and ad blocking.';

const PopupManager = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const popupIds = [
    "mozilla-vpn",
    "mozilla-monitor",
    "mozilla-pocket",
    "mozilla-relay",
    "mozilla-focus"
  ];

  useEffect(() => {
    const popups = popupIds.map(id => document.getElementById(id));
    let timerInterval;

    const showNextPopup = () => {
      popups[currentIndex].style.display = "none";
      setCurrentIndex(prevIndex => (prevIndex + 1) % popupIds.length);
      popups[currentIndex].style.display = "block";
    };

    const startTimer = () => {
      timerInterval = setInterval(showNextPopup, 5000);
    };

    const stopTimer = () => {
      clearInterval(timerInterval);
    };

    const showPreviousPopup = () => {
      popups[currentIndex].style.display = "none";
      setCurrentIndex(prevIndex => (prevIndex - 1 + popupIds.length) % popupIds.length);
      popups[currentIndex].style.display = "block";
    };

    popups.forEach(popup => {
      popup.addEventListener("mouseenter", stopTimer);
      popup.addEventListener("mouseleave", startTimer);
    });

    const closeBtns = document.querySelectorAll(".closebtn");
    closeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        popups[currentIndex].style.display = "none";
      });
    });

    const prevButtons = popupIds.map(id => document.getElementById(`prevButton${id}`));
    prevButtons.forEach(button => {
      button.addEventListener("click", showPreviousPopup);
    });

    startTimer();

    return () => {
      clearInterval(timerInterval);
      popups.forEach(popup => {
        popup.removeEventListener("mouseenter", stopTimer);
        popup.removeEventListener("mouseleave", startTimer);
      });
      closeBtns.forEach(btn => {
        btn.removeEventListener("click", () => {
          popups[currentIndex].style.display = "none";
        });
      });
      prevButtons.forEach(button => {
        button.removeEventListener("click", showPreviousPopup);
      });
    };
  }, [currentIndex, popupIds]);

  return (
    <div>
      {popupIds.map((id, index) => (
        <div key={id} id={id} className={`popup ${index === currentIndex ? 'show' : ''}`}>
          {id === "mozilla-vpn" && (
            <div className="popup-content">
              <button className="closebtn close-chat">X</button>
              <button id="prevButton1" className="toggleButton">Previous Ad</button>
              <div className="ad-area">
                <div className="ad-title">
                  <div className="title"> 
                    <img className="monitor-logo" src={MozillaVPNImage} alt="mozilla-monitor"/>
                  </div>
                </div>   
                <div id="ad-view">
                  <img className="monitor-ad-pic" src={MozillaVPNAd} alt="monitor-ad"/>
                  <div className="text"> <h5> <b> {VPNAdText} </b> </h5> </div>
                </div>
                <a href="https://www.mozilla.org/en-US/products/vpn/">
                  <button className="button-77" role="button">Get Mozilla VPN</button>
                </a>
              </div>
            </div>
          )}
          {id === "mozilla-monitor" && (
            <div className="popup-content2">
              <button className="closebtn" id="close-chat2">X</button>
              <button id="prevButton2" className="toggleButton">Previous Ad</button>
              <div className="ad-area2">
                <div className="ad-title2">
                  <div className="title2"> 
                    Mozilla Monitor
                    <img className="monitor-logo" src={MozillaMonitorImage} alt="mozilla-monitor"/>
                  </div>
                </div>   
                <div id="ad-view">
                  <img className="monitor-ad-pic" src={MozillaMonitorAd} alt="monitor-ad"/>
                  <div className="text2">
                    <h5><b>{MonitorAdText}</b></h5>
                  </div>
                </div>
                <a href="https://monitor.mozilla.org/?utm_source=www.mozilla.org&utm_medium=referral&utm_campaign=products">
                  <button className="button-78" role="button">Check for Breaches NOW!</button>
                </a>
              </div>
            </div>
          )}
          {id === "mozilla-pocket" && (
            <div className="popup-content">
              <button className="closebtn" id="close-chat3">X</button>
              <button id="prevButton3" className="toggleButton">Previous Ad</button>
              <div className="ad-area">
                <div className="ad-title">
                  <div className="title">
                    <img className="monitor-logo" src={MozillaPocketImage} alt="mozilla-pocket" />
                  </div>
                </div>
                <div id="ad-view">
                  <img className="monitor-ad-pic" src={MozillaPocketAd} alt="pocket-ad" />
                  <div className="text">
                    <h5><b>{PocketAdText}</b></h5>
                  </div>
                </div>
                <a href="https://getpocket.com/en/pocket-and-firefox/?utm_source=www.mozilla.org&utm_medium=referral&utm_campaign=products">
                  <button className="button-79" role="button">Exlpore Pocket</button>
                </a>
              </div>
            </div>
          )}
          {id === "mozilla-relay" && (
            <div className="popup-content">
              <button className="closebtn" id="close-chat4">X</button>
              <button id="prevButton4" className="toggleButton">Previous Ad</button>
              <div className="ad-area">
                <div id="ad-view">
                  <img className="monitor-ad-pic" src={MozillaRelayImage} alt="relay-ad" />
                  <div className="text">
                    <h5><b>{RelayAdText}</b></h5>
                  </div>
                </div>
                <a href="https://relay.firefox.com/">
                  <button className="button-80" role="button">Get Firefox Relay</button>
                </a>
              </div>
            </div>
          )}
          {id === "mozilla-focus" && (
            <div className="popup-content">
              <button className="closebtn" id="close-chat5">X</button>
              <button id="prevButton5" className="toggleButton">Previous Ad</button>
              <div className="ad-area">
                <div id="ad-view">
                  <img className="monitor-ad-pic" src={MozillaFocusImage} alt="focus-ad" />
                  <div className="text">
                    <h5><b>{FocusAdText}</b></h5>
                  </div>
                </div>
                <a href="https://www.mozilla.org/en-US/firefox/browsers/mobile/focus/">
                  <button className="button-81" role="button">Get Firefox Focus</button>
                </a>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PopupManager;
