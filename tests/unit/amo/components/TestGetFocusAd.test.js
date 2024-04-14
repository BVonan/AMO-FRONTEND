import React from 'react';
import { shallow } from 'enzyme';
import { GetFocusAdBase } from 'amo/components/GetFocusAd';

describe('GetFocusAd component', () => {
  const defaultProps = {
    _tracking: jest.fn(),
    clientApp: 'desktop',
    i18n: { gettext: jest.fn() },
    location: { query: {} },
    userAgentInfo: { userAgent: 'some user agent' }
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<GetFocusAdBase {...defaultProps} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('calls _tracking.sendEvent on button click', () => {
    const wrapper = shallow(<GetFocusAdBase {...defaultProps} />);
    wrapper.find('.GetFirefoxBanner-button').simulate('click');
    expect(defaultProps._tracking.sendEvent).toHaveBeenCalledWith({
      action: 'download-firefox-banner-click',
      category: 'GET_FIREFOX_BUTTON_CLICK_CATEGORY'
    });
  });

  it('dismisses ad content on close button click', () => {
    const wrapper = shallow(<GetFocusAdBase {...defaultProps} />);
    wrapper.find('.close-btn').simulate('click');
    expect(wrapper.state('showAdContent')).toBeFalsy();
  });

  it('renders null if user agent is Firefox', () => {
    const props = { ...defaultProps, userAgentInfo: { userAgent: 'Firefox' } };
    const wrapper = shallow(<GetFocusAdBase {...props} />);
    expect(wrapper.type()).toBeNull();
  });

  it('renders null if showAdContent is false', () => {
    const props = { ...defaultProps, showAdContent: false };
    const wrapper = shallow(<GetFocusAdBase {...props} />);
    expect(wrapper.type()).toBeNull();
  });

  // Add more test cases as needed...
});
