/* @flow */
import * as React from 'react';
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
import focusPhone2 from './img/fx.svg';
import focusPhone2 from './img/fx.svg';



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
  const onButtonClick = () => {
    _tracking.sendEvent({
      action: GET_FIREFOX_BANNER_CLICK_ACTION,
      category: GET_FIREFOX_BUTTON_CLICK_CATEGORY,
    });
  };

  const onDismiss = () => {
    _tracking.sendEvent({
      action: GET_FIREFOX_BANNER_DISMISS_ACTION,
      category: GET_FIREFOX_BANNER_DISMISS_CATEGORY,
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

  
  return (
    <Notice
      className="GetFirefoxBanner"
      dismissible
      id="GetFirefoxBanner-notice"
      onDismiss={onDismiss}
      type="warning"
    >
      <span className="GetFirefoxBanner-content">{bannerContent}</span>
      {/* Insert HTML content here */}
      <div class="ad">
        <span class="close-btn" onclick="this.parentElement.style.display='none'">&times;</span>
        <div class="popup-content">
            <div class="image-container">
                <img src={img/focusPhone2.png} alt="Mozilla Focus" class="product-image">
            </div>
            <div class="text-container">
                <div class="product-info">
                    <div class="product-name">
                        <h1>Mozilla Focus <img src={img/focus.png} alt="Mozilla focus" class="product-imag"></h1>
                        <h2 class="text-gradient">Simply private mobile browsing</h2>
                    </div>
                    <div class="product-description">
                        <h3>Firefox Focus is your dedicated privacy browser with automatic tracking protection. With Focus, your pages load faster and your data stays private.</h3>
                    </div>
                    <div class="product-features">
                        <h3>Key Features:</h3>
                        <div class="feature-columns">
                            <div class="feature-column">
                                    <li>Easily erase your history, passwords and cookies , so unwanted ads don’t follow you around online</li>
                                    <br>
                                    <li>Firefox Focus offers next-level privacy by default and it’s backed by Mozilla</li>
                            </div>
                            <div class="feature-column">
                                    <li>Firefox Focus blocks a wide range of common trackers by default including social trackers</li>
                                    <br>
                                    <li>Focus removes trackers so the pages you’re viewing require less data and load much faster</li>
                            </div>
                        </div>
                        <div class="button-container">
                            <a href="https://www.mozilla.org/en-US/firefox/browsers/mobile/focus/">
                                <button nid="button">Get Firefox Focus</button>
                            </a>
                        </div>
                    </div>
 
                    
                </div>
            </div>
        </div>
    </div>
    </Notice>
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
