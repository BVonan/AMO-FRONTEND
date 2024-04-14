import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import GetVPNAdBase from '../../../../src/amo/components/GetVPNAd';

describe('GetVPNAd', () => {
  it('renders without crashing', () => {
    render(<GetVPNAd />);
  });

  it('displays the ad content initially', () => {
    const { getByText } = render(<GetVPNAd />);
    const adContent = getByText("Protect your online privacy with Mozilla's amazing VPN. Stay safe and secure while browsing the web.");
    expect(adContent).toBeInTheDocument();
  });

  it('hides the ad content when the close button is clicked', async () => {
    const { getByText, queryByText } = render(<GetVPNAd />);
    const closeButton = getByText('×');
    fireEvent.click(closeButton);

    await waitFor(() => {
      const adContent = queryByText("Protect your online privacy with Mozilla's amazing VPN. Stay safe and secure while browsing the web.");
      expect(adContent).not.toBeInTheDocument();
    });
  });
});
