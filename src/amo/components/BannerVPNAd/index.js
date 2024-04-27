/* @flow */
import React, { useState } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import tracking from 'amo/tracking';
import translate from 'amo/i18n/translate';
import type { AppState } from 'amo/store';
import vpnPhone2 from './img/vpnPhone2.png';
import vpn from './img/vpn.png';
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

export const GetVPNAdBase = ({
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
    <AdContainer showOverlay={showOverlay} dismissAdContent={dismissAdContent} adClassName="vpn-ad" popupClassName="vpn-popup">
    <div className="image-container">
      <img src={vpnPhone2} alt="Mozilla VPN" className="product-image"/>
    </div>
    <div className="text-container">
      <div className="product-info">
        <div className="product-name">
          <h1>Mozilla VPN <img src={vpn} alt="Mozilla VPN" className="product-imag"/></h1>
          <br></br>
          <h2 className="text-gradient-vpn">Powerful privacy for peace of mind</h2>
        </div>
        <br></br>
        <div className="product-description">
          <h3>Protect your online privacy with Mozilla's amazing VPN. Stay safe and secure while browsing the web.</h3>
        </div>
        <br></br>
        <div className="product-features">
          <h3>Key Features:</h3>
          <div className="feature-columns">
            <div className="feature-column">
            <li>Secure and private browsing</li>
                                    <li>Access to geo-restricted content</li>
                                    <li>Connect up to 5 devices</li>
                                    <li>More than 500 servers in 30+ countries</li>
                                    <li> Fast network speeds even while gaming</li>
            </div>
            <div className="feature-column">
            <li>Fast and reliable connections</li>
                                    <li>Cross-platform support</li>
                                    <li>No logging, tracking or sharing of network data</li>
                                    <li>No bandwidth restrictions or throttling</li>
                                    <li>Extra security: whole device protection, multi-hop routing & more</li>
            </div>
          </div>
          <div className="button-container">
          <a href="https://www.mozilla.org/en-US/products/vpn/">
              <button className="buttonColorVPN">Get Mozilla VPN</button>
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

const GetVPNAd: React.ComponentType<Props> = compose(
  withRouter,
  connect(mapStateToProps),
  translate(),
)(GetVPNAdBase);

export default GetVPNAd;
