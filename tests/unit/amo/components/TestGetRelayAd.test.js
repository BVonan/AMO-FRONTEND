import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import GetRelayAdBase from '../../../../src/amo/components/GetRelayAd';

describe('GetRelayAd', () => {
  it('renders without crashing', () => {
    render(<GetRelayAd />);
  });

  it('displays the ad content initially', () => {
    const { getByText } = render(<GetRelayAd />);
    const adContent = getByText('Our secure, easy-to-use email and phone masks help keep your identity private!');
    expect(adContent).toBeInTheDocument();
  });

  it('hides the ad content when the close button is clicked', async () => {
    const { getByText, queryByText } = render(<GetRelayAd />);
    const closeButton = getByText('×');
    fireEvent.click(closeButton);

    await waitFor(() => {
      const adContent = queryByText('Our secure, easy-to-use email and phone masks help keep your identity private!');
      expect(adContent).not.toBeInTheDocument();
    });
  });

});
