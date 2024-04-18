import React from 'react';
import './MonitorAdComponent.css';
import monitorLogo from '../../assets/images/monitor.png';
import monitorPhone from '../../assets/images/monitorPhone.webp';

const MonitorAdComponent = () => {
  return (
    <div className="ad">
      <span className="close-btn1" onClick={() => (document.querySelector('.ad').style.display = 'none')}>
        &times;
      </span>
      <div className="popup-content1">
        <div className="image-container1">
          <img src={monitorPhone} alt="Mozilla Monitor" className="product-imag1" />
        </div>
        <div className="text-container1">
          <div className="product-info1">
            <div className="product-name1">
              <h1><b>
                Mozilla Monitor <img src={monitorLogo} alt="Mozilla Monitor" className="product-image1" /></b>
              </h1>
              <h2 className="text-gradient1"><b>Powerful privacy for peace of mind</b></h2>
            </div>
            <div className="product-description1">
              <h3><b>
                There's a $240 billion industry of data brokers selling your private information for profit. It's time to
                take back your privacy.</b>
              </h3>
            </div>
            <div className="product-features1">
              <h3><b>Key Features:</b></h3>
              <div className="feature-columns1">
                <div className="feature-column1">
                  <li>Secure and private browsing</li>
                  <li>Scan 190 data broker sites that may be selling your personal info</li>
                  <li>Remove personal info from sites that are selling it</li>
                </div>
                <div className="feature-column1">
                  <li>Get alerts when your data has been breached</li>
                  <li>Fix high-risk data breaches</li>
                  <li>Continuous monitoring</li>
                </div>
              </div>
              <div className="button-container1">
                <a href="https://monitor.mozilla.org">
                  <button>Get Mozilla Monitor</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitorAdComponent;