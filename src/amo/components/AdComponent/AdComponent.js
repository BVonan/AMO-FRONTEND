import React from 'react';

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
