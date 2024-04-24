import * as React from 'react';
import Header from 'amo/components/Header';
import { CLIENT_APP_FIREFOX } from 'amo/constants';
import { dispatchClientMetadata, render as defaultRender, screen, userAgents } from 'tests/unit/helpers';

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
    expect(screen.getByRole('link', { name: 'Extensions' })).toHaveAttribute('href', '/extensions/');
    expect(screen.queryByRole('link', { name: 'download Firefox' })).not.toBeInTheDocument();
  });

  it('renders logout button when user is logged in', () => {
    render({ forBlog: false, isAddonInstallPage: false, siteUser: { name: 'Test User' } });

    // Assertion for rendering logout button
    expect(screen.getByText('Log out')).toBeInTheDocument();
  });

  it('renders the header title', () => {
    render({ forBlog: false, isAddonInstallPage: false });

    // Assertion for rendering header title
    expect(screen.getByText('Firefox Browser Add-ons')).toBeInTheDocument();
  });
});
