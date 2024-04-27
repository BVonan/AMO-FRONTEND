/* @flow */
import React, { useState } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import tracking from 'amo/tracking';
import translate from 'amo/i18n/translate';
import type { AppState } from 'amo/store';
import focus from './img/focus.png';
import focusPhone2 from './img/focusPhone2.png';
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

export const GetFcousAdBanner = ({
  _tracking = tracking,
  clientApp,
  i18n,
  location,
  userAgentInfo,
}: InternalProps): null | React.Node => {
  const [showOverlay, setShowOverlay] = useState(true); // State to track overlay visibility

  const dismissAdContent = () => {
    // code to dismiss or hide the HTML content
    const htmlContent = document.querySelector('.image-container-focus');
    if (htmlContent) {
      htmlContent.style.display = 'none'; // Hide the HTML content
    }
    setShowOverlay(false); // Hide overlay when ad content is dismissed
  };


  return (
    <AdContainer showOverlay={showOverlay} dismissAdContent={dismissAdContent} adClassName="focus-ad" popupClassName="focus-popup">
      <div className="image-container-focus">
        <img src={focusPhone2} alt="Mozilla Focus" className="product-image" />
      </div>
      <div className="text-container">
        <div className="product-info">
          <div className="product-name">
            <h1>Mozilla Focus <img src={focus} alt="Mozilla focus" className="product-imag" /></h1>
            <br></br>
            <h2 className="text-gradient-focus">Simply private mobile browsing</h2>
          </div>
          <br></br>
          <div className="product-description">
            <h3>Firefox Focus is your dedicated privacy browser with automatic tracking protection. With Focus, your pages load faster and your data stays private.</h3>
          </div>
          <br></br>
          <div className="product-features">
            <h3>Key Features:</h3>
            <div className="feature-columns">
              <div className="feature-column">
                <ul>
                  <li>Easily erase your history, passwords and cookies so unwanted ads don’t follow you around online</li>
                  <br />
                  <li>Firefox Focus offers next-level privacy by default and it’s backed by Mozilla</li>
                </ul>
              </div>
              <div className="feature-column">
                <ul>
                  <li>Firefox Focus blocks a wide range of common trackers by default including social trackers</li>
                  <br />
                  <li>Focus removes trackers so the pages you’re viewing require less data and load much faster</li>
                </ul>
              </div>
            </div>
            <div className="button-container">
              <a href="https://www.mozilla.org/en-US/firefox/browsers/mobile/focus/">
                <button className="buttonColorFocus">Get Firefox Focus</button>
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

const GetFcousAd: React.ComponentType<Props> = compose(
  withRouter,
  connect(mapStateToProps),
  translate(),
)(GetFcousAdBanner);

export default GetFcousAd;