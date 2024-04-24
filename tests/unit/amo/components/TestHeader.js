import * as React from 'react';
import Header, { HeaderBase } from 'amo/components/Header'; // Import HeaderBase along with Header
// import Ads from 'amo/components/Header';
import { Ads } from '../../../../src/amo/components/Header/index'; 
import { CLIENT_APP_FIREFOX } from 'amo/constants';

import '../../../setupTests'; 
import { shallow } from 'enzyme';

import { CLIENT_APP_FIREFOX } from 'amo/constants';
import {
  dispatchClientMetadata,
  render as defaultRender,
  screen,
  userAgents,
} from 'tests/unit/helpers';

// Import Ads constant from the source file where it is defined

describe(__filename, () => {
  const render = (props = {}) => {
    return defaultRender(<Header {...props} />, {
      store: dispatchClientMetadata({
        clientApp: CLIENT_APP_FIREFOX,
        userAgent: userAgents.chrome[0],
      }).store,
    });
  };

  it('renders the header with blog-specific UI', () => {
    render({ forBlog: true, isAddonInstallPage: false });

    // Assertions specific to blog UI
    expect(screen.getByRole('link', { name: 'Firefox Browser Add-ons' })).toHaveAttribute('href', '/');
    expect(screen.queryByRole('link', { name: 'Log in' })).not.toBeInTheDocument();
    expect(screen.queryByTitle('Submit and manage extensions and themes')).not.toBeInTheDocument();
    expect(screen.queryByRole('search')).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Extensions' })).toHaveAttribute(
      'href',
      '/extensions/',
    );
    expect(
      screen.queryByRole('link', { name: 'download Firefox' }),
    ).not.toBeInTheDocument();
  });
});

// Fix the Ads Constant Test
describe('Ads Constant', () => {
  // Fix the HeaderBase Reference in this test
  it('should load a random ad component on mount', async () => {
    const headerInstance = new HeaderBase({
      handleLogOut: jest.fn(),
      api: {},
      clientApp: CLIENT_APP_FIREFOX,
      i18n: {},
      isReviewer: false,
      loadedPageIsAnonymous: false,
      siteIsReadOnly: false,
      siteUser: {},
      userAgentInfo: {},
    });
    await headerInstance.componentDidMount();

    expect(headerInstance.state.AdComponent).toBeDefined();
  });
});
