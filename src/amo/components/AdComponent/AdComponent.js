import React from 'react';

const AdContainer = ({ children, showOverlay, dismissAdContent, adClassName, popupClassName }) => (
  <div>
    <div className={`overlay ${showOverlay ? 'show-overlay' : ''}`} onClick={dismissAdContent} />
    <div className={`ad ${adClassName}`}>
      <span className="close-btn" onClick={dismissAdContent}>&times;</span>
      <div className={`popup-content ${popupClassName}`}>
        {children}
      </div>
    </div>
  </div>
);

export default AdContainer;
