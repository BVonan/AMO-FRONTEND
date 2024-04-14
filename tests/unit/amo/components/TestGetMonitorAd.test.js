import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import GetMonitorAdBase from '../../../../src/amo/components/GetMonitorAd';

describe('GetMonitorAd', () => {
  it('renders without crashing', () => {
    render(<GetMonitorAd />);
  });

  it('displays the ad content initially', () => {
    const { getByText } = render(<GetMonitorAd />);
    const adContent = getByText('Protect your online privacy with Mozilla\'s amazing VPN. Stay safe and secure while browsing the web.');
    expect(adContent).toBeInTheDocument();
  });

  it('hides the ad content when the close button is clicked', async () => {
    const { getByText, queryByText } = render(<GetMonitorAd />);
    const closeButton = getByText('×');
    fireEvent.click(closeButton);

    await waitFor(() => {
      const adContent = queryByText('Protect your online privacy with Mozilla\'s amazing VPN. Stay safe and secure while browsing the web.');
      expect(adContent).not.toBeInTheDocument();
    });
  });

});
