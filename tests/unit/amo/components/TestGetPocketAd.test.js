import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import GetPocketAdBase from '../../../../src/amo/components/GetPocketAd';

describe('GetPocketAd', () => {
  it('renders without crashing', () => {
    render(<GetPocketAd />);
  });

  it('displays the ad content initially', () => {
    const { getByText } = render(<GetPocketAd />);
    const adContent = getByText('Turn your downtime into quality time. Pocket is the place to save, read and get fueled by the best content on the web.');
    expect(adContent).toBeInTheDocument();
  });

  it('hides the ad content when the close button is clicked', async () => {
    const { getByText, queryByText } = render(<GetPocketAd />);
    const closeButton = getByText('×');
    fireEvent.click(closeButton);

    await waitFor(() => {
      const adContent = queryByText('Turn your downtime into quality time. Pocket is the place to save, read and get fueled by the best content on the web.');
      expect(adContent).not.toBeInTheDocument();
    });
  });

});
