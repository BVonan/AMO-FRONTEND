/* @flow */
import React, { useState } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import {
  CLIENT_APP_ANDROID,
  CLIENT_APP_FIREFOX,
  GET_FIREFOX_BANNER_UTM_CONTENT,
} from 'amo/constants';
import Button from 'amo/components/Button';
import {
  GET_FIREFOX_BUTTON_CLICK_CATEGORY,
  getDownloadLink,
} from 'amo/components/GetFirefoxButton';
import Notice from 'amo/components/Notice';
import Link from 'amo/components/Link';
import tracking from 'amo/tracking';
import { isFirefox } from 'amo/utils/compatibility';
import translate from 'amo/i18n/translate';
import { replaceStringsWithJSX } from 'amo/i18n/utils';
import type { UserAgentInfoType } from 'amo/reducers/api';
import type { AppState } from 'amo/store';
import type { I18nType } from 'amo/types/i18n';
import type { ReactRouterLocationType } from 'amo/types/router';
import vpnPhone2 from './img/vpnPhone2.png';
import vpn from './img/vpn.png';

import './styles.scss';

export const GET_FIREFOX_BANNER_CLICK_ACTION = 'download-firefox-banner-click';
export const GET_FIREFOX_BANNER_DISMISS_ACTION =
  'download-firefox-banner-dismiss';
export const GET_FIREFOX_BANNER_DISMISS_CATEGORY =
  'AMO Download Firefox Banner';

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

export const GetFirefoxBannerBase = ({
  _tracking = tracking,
  clientApp,
  i18n,
  location,
  userAgentInfo,
}: InternalProps): null | React.Node => {
  const [showOverlay, setShowOverlay] = useState(true); // State to track overlay visibility

  const onButtonClick = () => {
    _tracking.sendEvent({
      action: GET_FIREFOX_BANNER_CLICK_ACTION,
      category: GET_FIREFOX_BUTTON_CLICK_CATEGORY,
    });
  };

  if (isFirefox({ userAgentInfo })) {
    return null;
  }

  let overrideQueryParams = { utm_content: GET_FIREFOX_BANNER_UTM_CONTENT };
  if (clientApp === CLIENT_APP_ANDROID) {
    overrideQueryParams = {
      ...overrideQueryParams,
      // If there is a UTM campaign set on the visited AMO URL, pass it to
      // the Play Store link. Otherwise, we use the fallback value.
      utm_campaign: location.query.utm_campaign || undefined,
    };
  }

  const replacements = [
    [
      'downloadLinkStart',
      'downloadLinkEnd',
      (text) => (
        <Button
          buttonType="none"
          className="GetFirefoxBanner-button"
          href={getDownloadLink({ clientApp, overrideQueryParams })}
          key="GetFirefoxBanner-button"
          onClick={onButtonClick}
        >
          {text}
        </Button>
      ),
    ],
  ];

  if (clientApp === CLIENT_APP_ANDROID) {
    replacements.push([
      'linkStart',
      'linkEnd',
      (text) => (
        <Link to={`/${CLIENT_APP_FIREFOX}/`} prependClientApp={false}>
          {text}
        </Link>
      ),
    ]);
  }

  const bannerContent = replaceStringsWithJSX({
    text:
      clientApp === CLIENT_APP_FIREFOX
        ? i18n.gettext(`To use these add-ons, you'll need to
            %(downloadLinkStart)s Download Firefox%(downloadLinkEnd)s`)
        : i18n.gettext(`To use Android extensions, you'll need
            %(downloadLinkStart)sFirefox for Android%(downloadLinkEnd)s. To
            explore Firefox for desktop add-ons, please %(linkStart)svisit our
            desktop site%(linkEnd)s`),
    replacements,
  });

  const dismissAdContent = () => {
    // code to dismiss or hide the HTML content
    const htmlContent = document.querySelector('.ad');
    if (htmlContent) {
      htmlContent.style.display = 'none'; // Hide the HTML content
    }
    setShowOverlay(false); // Hide overlay when ad content is dismissed
  };

  return (
    <div>
      <div className={`overlay ${showOverlay ? 'show-overlay' : ''}`} onClick={dismissAdContent} />
        <div className="ad">
          <span className="close-btn" onClick={dismissAdContent}>&times;</span>
          <div className="popup-content">
    <div className="image-container">
      <img src={vpnPhone2} alt="Mozilla VPN" className="product-image"/>
    </div>
    <div className="text-container">
      <div className="product-info">
        <div className="product-name">
          <h1>Mozilla VPN <img src={vpn} alt="Mozilla VPN" className="product-imag"/></h1>
          <h2 className="text-gradient-vpn">Powerful privacy for peace of mind</h2>
        </div>
        <div className="product-description">
          <h3>Protect your online privacy with Mozilla's amazing VPN. Stay safe and secure while browsing the web.</h3>
        </div>
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
  </div>
        </div>
    </div>
  );
};

function mapStateToProps(state: AppState): PropsFromState {
  return {
    clientApp: state.api.clientApp,
    userAgentInfo: state.api.userAgentInfo,
  };
}

const GetFirefoxBanner: React.ComponentType<Props> = compose(
  withRouter,
  connect(mapStateToProps),
  translate(),
)(GetFirefoxBannerBase);

export default GetFirefoxBanner;
