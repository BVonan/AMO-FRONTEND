import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import PopupManager from '../../../../src/amo/components/PopupRotatingAds';

describe('PopupManager', () => {
  it('renders without crashing', () => {
    render(<PopupManager />);
  });

  it('displays the Mozilla VPN ad initially', () => {
    const { getByTestId } = render(<PopupManager />);
    const vpnAd = getByTestId('mozilla-vpn-ad');
    expect(vpnAd).toBeInTheDocument();
  });

  it('switches to the next ad when the "Previous Ad" button is clicked', async () => {
    const { getByTestId, getByText } = render(<PopupManager />);
    const prevButton = getByText('Previous Ad');
    fireEvent.click(prevButton);

    await waitFor(() => {
      const monitorAd = getByTestId('mozilla-monitor-ad');
      expect(monitorAd).toBeInTheDocument();
    });
  });

  it('closes the popup when the close button is clicked', async () => {
    const { getByText, queryByTestId } = render(<PopupManager />);
    const closeButton = getByText('X');
    fireEvent.click(closeButton);

    await waitFor(() => {
      const vpnAd = queryByTestId('mozilla-vpn-ad');
      expect(vpnAd).not.toBeInTheDocument();
    });
  });
});
