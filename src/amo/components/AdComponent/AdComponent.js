import React from 'react';

const dismissAdContent = () => {
  // code to dismiss or hide the HTML content
  const htmlContent = document.querySelector('.ad');
  if (htmlContent) {
    htmlContent.style.display = 'none'; // Hide the HTML content
  }
  setShowOverlay(false); // Hide overlay when ad content is dismissed
};

const AdContainer = ({ children, showOverlay, dismissAdContent }) => (
  <div>
    <div className={`overlay ${showOverlay ? 'show-overlay' : ''}`} onClick={dismissAdContent} />
    <div className="ad">
      <span className="close-btn" onClick={dismissAdContent}>&times;</span>
      <div className="popup-content">
        {children}
      </div>
    </div>
  </div>
);

export default AdContainer;
