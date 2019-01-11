import React from 'react';
import { shallow } from 'enzyme';
import LaunchDetails from './LaunchDetails';

describe('Launch Page', () => {
  it('renders without crash', () => {
    const launchDetails = shallow(<LaunchDetails data={{ rocket: {} }} />);
    expect(launchDetails).toMatchSnapshot();
  });
});
