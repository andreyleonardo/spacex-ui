import React from 'react';
import { shallow } from 'enzyme';
import LaunchPage from './LaunchPage';

describe('Launch Page', () => {
  it('renders without crash', () => {
    const launchPage = shallow(<LaunchPage match={{ params: { id: 1 } }} />);
    expect(launchPage).toMatchSnapshot();
  });
});
