/* @flow */
import React, { useState } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import tracking from 'amo/tracking';
import translate from 'amo/i18n/translate';
import type { AppState } from 'amo/store';
import relayPhone from './img/relayPhone.png';
import relay from './img/relay.png';
import AdContainer from '../AdComponent/AdComponent';

import './styles.scss';

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

export const GetRelayAdBase = ({
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
    <AdContainer showOverlay={showOverlay} dismissAdContent={dismissAdContent} adClassName="relay-ad" popupClassName="relay-popup">
      <div className="image-container">
        <img
          src={relayPhone}
          alt="Mozilla Focus"
          className="product-image"
        />
      </div>
      <div className="text-container">
        <div className="product-info">
          <div className="product-name">
            <h1>
              Firefox Relay
              <img
                src={relay}
                alt="Firefox Pocket"
                className="product-imag"
              />
            </h1>
            <br></br>
            <h2 className="text-gradient-relay">
              Protect your identity with secure phone and email masking
            </h2>
          </div>
          <br></br>
          <div className="product-description">
            <h3>
              Our secure, easy-to-use email and phone masks help keep your
              identity private!
            </h3>
          </div>
          <br></br>
          <div className="product-features">
            <h3>Key Features:</h3>
            <div className="feature-columns">
              <div className="feature-column">
                <ul>
                  <li>Use Relay email masks and phone masks everywhere</li>
                  <br />
                  <li>Manage your masks from your Relay dashboard</li>
                </ul>
              </div>
              <div className="feature-column">
                <ul>
                  <li>
                    We’ll forward emails, phone calls, and texts to you
                  </li>
                  <br />
                  <li>
                    Relay protects your identity and your inbox with unique
                    email masks
                  </li>
                </ul>
              </div>
            </div>
            <div className="button-container">
              <a href="https://relay.firefox.com">
                <button className="buttonColorRelay">
                  Get Firefox Relay
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

const GetRelayAd: React.ComponentType<Props> = compose(
  withRouter,
  connect(mapStateToProps),
  translate(),
)(GetRelayAdBase);

export default GetRelayAd;
