/* @flow */
import React, { useState } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import tracking from 'amo/tracking';
import translate from 'amo/i18n/translate';
import type { AppState } from 'amo/store';
import AdContainer from '../AdComponent/AdComponent';


export type Props = {||};

export type DefaultProps = {|
  _tracking: typeof tracking,
|};

type PropsFromState = {|
  clientApp: string,
  userAgentInfo: UserAgentInfoType,
|};

type InternalProps = {|
  ...Props,
  ...DefaultProps,
  ...PropsFromState,
  i18n: I18nType,
  location: ReactRouterLocationType,
|};

export const GetMonitorAdBanner = ({
  _tracking = tracking,
  clientApp,
  i18n,
  location,
  userAgentInfo,
}: InternalProps): null | React.Node => {
  const [showOverlay, setShowOverlay] = useState(true); // State to track overlay visibility



  const dismissAdContent = () => {
    // code to dismiss or hide the HTML content
    const htmlContent = document.querySelector('.ad');
    if (htmlContent) {
      htmlContent.style.display = 'none'; // Hide the HTML content
    }
    setShowOverlay(false); // Hide overlay when ad content is dismissed
  };

  return (
    <AdContainer showOverlay={showOverlay} dismissAdContent={dismissAdContent}>
      <div className="image-container">
              <img src={monitorPhone} alt="Mozilla Monitor" className="product-image" />
            </div>
            <div className="text-container">
              <div className="product-info">
                <div className="product-name">
                <h1>
                  Mozilla Monitor{' '}
                  <img
                    src={monitor}
                    alt="Mozilla Monitor"
                    className="product-imag"
                  />
                </h1>
                <br></br>
                <h2 className="text-gradient-Monitor">
                  Powerful privacy for peace of mind
                </h2>
                </div>
                <br></br>
                <div className="product-features">
          <h3>Key Features:</h3>
          <div className="feature-columns">
            <div className="feature-column">
              <ul>
              <li>Secure and private browsing</li>
              <li>Scan 190 data broker sites that may be selling your personal info</li>
              <li>Remove personal info from sites that are selling it</li>
              </ul>
            </div>
            <div className="feature-column">
              <ul>
              <li>Get alerts when your data has been breached</li>
              <li>Fix high-risk data breaches</li>
                      <li>Continuous monitoring</li>
              </ul>
            </div>
          </div>
                <div className="button-container">
            <a href="https://monitor.mozilla.org">
                    <button className="buttonColorMonitor">
                      Get Mozilla Monitor
                    </button>
            </a>
          </div>
          </div>
          </div>
          </div>
    </AdContainer>
  );
};
function mapStateToProps(state: AppState): PropsFromState {
  return {
    clientApp: state.api.clientApp,
    userAgentInfo: state.api.userAgentInfo,
  };
}

const GetMonitorAd: React.ComponentType<Props> = compose(
  withRouter,
  connect(mapStateToProps),
  translate(),
)(GetMonitorAdBanner);

export default GetMonitorAd;
