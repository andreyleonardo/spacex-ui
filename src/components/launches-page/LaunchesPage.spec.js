import React from 'react';
import { shallow } from 'enzyme';
import LaunchesPage from './LaunchesPage';

describe('Launches Page', () => {
  it('renders without crash', () => {
    const launchesPage = shallow(<LaunchesPage />);
    expect(launchesPage).toMatchSnapshot();
  });
});
