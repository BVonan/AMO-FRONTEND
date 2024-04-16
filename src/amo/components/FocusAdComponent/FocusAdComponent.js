import React from 'react';
import './FocusAdComponent.css';
import focusLogo from '../../assets/images/focus.png';
import focusPhone from '../../assets/images/focusPhone2.png';

const FocusAdComponent = () => {
  return (
    <div className="ad">
      <span className="close-btn2" onClick={() => (document.querySelector('.ad').style.display = 'none')}>
        &times;
      </span>
      <div className="popup-content2">
        <div className="image-container2">
          <img src={focusPhone} alt="Mozilla Focus" className="product-image2" />
        </div>
        <div className="text-container2">
          <div className="product-info2">
            <div className="product-name2">
              <h1><b>
                Mozilla Focus <img src={focusLogo} alt="Mozilla focus" className="product-imag2" /></b>
              </h1>
              <h2 className="text-gradient2"><b>Simply private mobile browsing</b></h2>
            </div>
            <div className="product-description2">
              <h3><b>
                Firefox Focus is your dedicated privacy browser with automatic tracking protection. With Focus, your pages
                load faster and your data stays private.</b>
              </h3>
            </div>
            <div className="product-features2">
              <h3><b>Key Features:</b></h3>
              <div className="feature-columns2">
                <div className="feature-column2">
                  <li>
                    Easily erase your history, passwords and cookies , so unwanted ads don't follow you around online
                  </li>
                  <br />
                  <li>Firefox Focus offers next-level privacy by default and it's backed by Mozilla</li>
                </div>
                <div className="feature-column2">
                  <li>Firefox Focus blocks a wide range of common trackers by default including social trackers</li>
                  <br />
                  <li>Focus removes trackers so the pages you're viewing require less data and load much faster</li>
                </div>
              </div>
              <div className="button-container2">
                <a href="https://www.mozilla.org/en-US/firefox/browsers/mobile/focus/">
                  <button>Get Firefox Focus</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusAdComponent;