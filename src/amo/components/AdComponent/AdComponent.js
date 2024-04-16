import React from 'react';
import './AdComponent.css';
import relayPhone from '../../assets/images/relayPhone.png';
import relayLogo from '../../assets/images/relay.png';

const AdComponent = () => {
  return (
    <div className="ad">
      <span className="close-btn" onClick={() => (document.querySelector('.ad').style.display = 'none')}>
        x
      </span>
      <div className="popup-content">
        <div className="image-container">
          <img src={relayPhone} alt="Mozilla Relay" className="product-image" />
        </div>
        <div className="text-container">
          <div className="product-info">
            <div className="product-name">
              <h1><b>
                Firefox Relay <img src={relayLogo} alt="Mozilla VPN" className="product-imag" />
             </b> </h1>
              <h2 className="text-gradient"><b>Protect your identity with secure phone and email masking</b></h2>
            </div>
            <div className="product-description">
              <h3><b>Our secure, easy-to-use email and phone masks help keep your identity private!</b></h3>
            </div>
            <div className="product-features">
              <h4><b>Key Features:</b></h4>
              <div className="feature-columns">
                <div className="feature-column">
                  <li>Use Relay email masks and phone masks everywhere</li>
                  <br />
                  <li>Manage your masks from your Relay dashboard</li>
                </div>
                <div className="feature-column">
                  <li>We'll forward emails, phone calls, and texts to you</li>
                  <br />
                  <li>Relay protects your identity and your inbox with unique email masks</li>
                </div>
              </div>
              <div className="button-container">
                <a href="https://relay.firefox.com">
                  <button>Get Mozilla Relay</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdComponent;
