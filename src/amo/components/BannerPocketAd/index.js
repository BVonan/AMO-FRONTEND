/* @flow */
import React, { useState } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import tracking from 'amo/tracking';
import translate from 'amo/i18n/translate';
import type { AppState } from 'amo/store';
import pocketPhone from './img/pocketPhone.png';
import pocket from './img/pocket.png';
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

export const GetPocketAdBanner = ({
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
    <AdContainer showOverlay={showOverlay} dismissAdContent={dismissAdContent} adClassName="pocket-ad" popupClassName="pocket-popup">
      <div className="image-container">
        <img src={pocketPhone} alt="Mozilla Focus" className="product-image" />
      </div>
      <div className="text-container">
        <div className="product-info">
          <div className="product-name">
            <h1>Firefox Pocket <img src={pocket} alt="Firefox Pocket" className="product-imag" /></h1>
            <h2 className="text-gradient-pocket">An Award-Winning App From Firefox</h2>
          </div>
          <div className="product-description">
            <h3>Turn your downtime into quality time. Pocket is the place to save, read and get fueled by the best content on the web.</h3>
          </div>
          <div className="product-features">
            <h3>Key Features:</h3>
            <div className="feature-columns">
              <div className="feature-column">
                <ul>
                  <li> Pocket strips away clutter and saves the page</li>
                  <li>Organize saved content with tags and folders</li>
                  <li>Seamless integration across devices</li>
                </ul>
              </div>
              <div className="feature-column">
                <ul>
                  <li>Discover new content based on interests:</li>
                  <li>hare saved content with friends and followers</li>
                  <li>Customizable reading experience</li>
                </ul>
              </div>
            </div>
            <div className="button-container">
              <a href="https://www.mozilla.org/en-US/firefox/pocket/">
                <button className="buttonColorPocket">Get Firefox pocket</button>
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

const GetPocketAd: React.ComponentType<Props> = compose(
  withRouter,
  connect(mapStateToProps),
  translate(),
)(GetPocketAdBanner);

export default GetPocketAd;
