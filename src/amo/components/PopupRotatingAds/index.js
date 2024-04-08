/* @flow */
/* global window */
import React, { useEffect, useState } from 'react';
import MozillaVPNImage from 'src/amo/components/PopupRotatingAds/img/mozilla-vpn-brand.svg'
import MozillaVPNAd from 'src/amo/components/PopupRotatingAds/img/mozilla-vpn.svg'
import MozillaMonitorImage from 'src/amo/components/PopupRotatingAds/img/Monitor_Icon.svg'
import MozillaMonitorAd from 'src/amo/components/PopupRotatingAds/img/monitor-ad.svg'
import MozillaFocusImage from 'src/amo/components/PopupRotatingAds/img/mozilla-focus.jpg'
import MozillaPocketImage from 'src/amo/components/PopupRotatingAds/img/pocket.png'
import MozillaPocketAd from 'src/amo/components/PopupRotatingAds/img/mozilla-pocket.svg'
import MozillaRelayImage from 'src/amo/components/PopupRotatingAds/img/mozilla-relay.svg'

  // Get all the pop-up elements
  const popups = [
    document.getElementById("mozilla-vpn"),
    document.getElementById("mozilla-monitor"),
    document.getElementById("mozilla-pocket"),
    document.getElementById("mozilla-relay"),
    document.getElementById("mozilla-focus")
  ];
  
  // Initialize the current index
  let currentIndex = 0;
  
  // Function to show the next pop-up and hide the current one
  export function showNextPopup() {
    // Hide the current pop-up
    popups[currentIndex].style.display = "none";
  
    // Move to the next index, wrapping around if necessary
    currentIndex = (currentIndex + 1) % popups.length;
  
    // Show the next pop-up
    popups[currentIndex].style.display = "block";
  }
  
  // Interval ID for the timer
  let timerInterval;
  
  // Function to start the timer
  export function startTimer() {
    timerInterval = setInterval(showNextPopup, 5000);
  }
  
  // Start the timer initially
  startTimer();
  
  // Function to stop the timer
  export function stopTimer() {
    clearInterval(timerInterval);
  }
  
  // Event listeners for mouse enter and mouse leave events on pop-up elements
  popups.forEach(function(popup) {
    popup.addEventListener("mouseenter", stopTimer);
    popup.addEventListener("mouseleave", startTimer);
  });
  
  // Function to show the previous pop-up and hide the current one
  export function showPreviousPopup() {
    // Hide the current pop-up
    popups[currentIndex].style.display = "none";
  
    // Move to the previous index, wrapping around if necessary
    currentIndex = (currentIndex - 1 + popups.length) % popups.length;
  
    // Show the previous pop-up
    popups[currentIndex].style.display = "block";
  }
  
  // Get all the close buttons
  const closeBtns = document.querySelectorAll(".closebtn");
  
  // Close the current pop-up when any close button is clicked
  closeBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      popups[currentIndex].style.display = "none";
    });
  });
  
  // Get the buttons for showing the previous pop-up
  const prevButtons = [
    document.getElementById("prevButton1"),
    document.getElementById("prevButton2"),
    document.getElementById("prevButton3"),
    document.getElementById("prevButton4"),
    document.getElementById("prevButton5")
  ];
  
  // Event listeners for previous buttons
  prevButtons.forEach(function(button) {
    button.addEventListener("click", showPreviousPopup);
  });

const VPNAdText = `Surf, stream and get work done on servers in over 30 countries 
        for a secure internet connection with a new perspective.`;
const MonitorAdText = 'See if you’ve been part of a data breach. If so, let us automatically get your private info back for you and continually monitor your identity for new leaks.';
const PocketAdText = 'Over 10 million users rely on Pocket to discover and savor the best articles, news, stories and videos. And as a member of the Firefox family, privacy is paramount.';
const RelayAdText = 'Protect your real email address to help control your inbox.';
const FocusAdText = 'Your dedicated privacy browser with automatic tracking protection and ad blocking.';


const PopupManager = () => {


  return (
   <div>
      {/* Mozilla VPN Pop-up */}
    <div id="mozilla-vpn" className="popup"> 
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
</div>

{/* Mozilla Monitor Pop-up */}
<div id="mozilla-monitor" className="popup" style={{ display: "none" }}>
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
            <h5>
                <b>
                {MonitorAdText}
                </b>
            </h5>
          </div>
    </div>
        <a href="https://monitor.mozilla.org/?utm_source=www.mozilla.org&utm_medium=referral&utm_campaign=products">
            <button className="button-78" role="button">Check for Breaches NOW!</button>
            </a>
    </div>
</div>
</div>

{/* Mozilla Pocket Pop-up */}
<div id="mozilla-pocket" className="popup" style={{ display: "none" }}>
  <div className="popup-content">
    <button className="closebtn" id="close-chat3">
      X
    </button>
    <button id="prevButton3" className="toggleButton">
      Previous Ad
    </button>
    <div className="ad-area">
      <div className="ad-title">
        <div className="title">
          <img className="monitor-logo" src={MozillaPocketImage} alt="mozilla-pocket" />
        </div>
      </div>
      <div id="ad-view">
        <img className="monitor-ad-pic" src={MozillaPocketAd} alt="pocket-ad" />
        <div className="text">
          <h5>
            <b>
              {PocketAdText}
            </b>
          </h5>
        </div>
      </div>
      <a href="https://getpocket.com/en/pocket-and-firefox/?utm_source=www.mozilla.org&utm_medium=referral&utm_campaign=products">
        <button className="button-79" role="button">
          Exlpore Pocket
        </button>
      </a>
    </div>
  </div>
</div>

{/* Mozilla Relay Pop-up */}
<div id="mozilla-relay" className="popup" style={{ display: "none" }}>
    <div className="popup-content">
      <button className="closebtn" id="close-chat4">
        X
      </button>
      <button id="prevButton4" className="toggleButton">
        Previous Ad
      </button>
      <div className="ad-area">
        <div id="ad-view">
          <img className="monitor-ad-pic" src={MozillaRelayImage} alt="relay-ad" />
          <div className="text">
            <h5>
              <b>{RelayAdText}</b>
            </h5>
          </div>
        </div>
        <a href="https://relay.firefox.com/">
          <button className="button-80" role="button">
            Get Firefox Relay
          </button>
        </a>
      </div>
    </div>
  </div>

  {/* Mozilla Focus Pop-up */}

  <div id="mozilla-focus" className="popup" style={{ display: "none" }}>
  <div className="popup-content">
    <button className="closebtn" id="close-chat5">
      X
    </button>
    <button id="prevButton5" className="toggleButton">
      Previous Ad
    </button>
    <div className="ad-area">
      <div id="ad-view">
        <img className="monitor-ad-pic" src={MozillaFocusImage} alt="focus-ad" />
        <div className="text">
          <h5>
            <b>
              {FocusAdText}
            </b>
          </h5>
        </div>
      </div>
      <a href="https://www.mozilla.org/en-US/firefox/browsers/mobile/focus/">
        <button className="button-81" role="button">
          Get Firefox Focus
        </button>
      </a>
    </div>
  </div>
  </div>
  </div>
  );
};

export default PopupManager;
