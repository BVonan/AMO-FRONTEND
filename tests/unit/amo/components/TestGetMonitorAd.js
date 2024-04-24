import React from 'react';
import { render } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
// import Enzyme from 'enzyme';

// eslint-disable-next-line import/no-unresolved
// import Adapter from 'enzyme-adapter-react-18'; // Replace 'enzyme-adapter-react-18' with the appropriate adapter for your React version
import { GetMonitorAdBase } from 'amo/components/GetMonitorAd';

// Enzyme.configure({ adapter: new Adapter() });

// Mocking the isFirefox function to always return true
jest.mock('amo/utils/compatibility', () => ({
  isFirefox: jest.fn().mockReturnValue(true),
}));

describe('GetMonitorAdBase component', () => {
  it('renders null when user agent is Firefox', () => {
    const { container } = render(<GetMonitorAdBase />);
    expect(container.firstChild).toBeNull();
  });
});
