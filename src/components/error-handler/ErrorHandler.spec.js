import React from 'react';
import { shallow } from 'enzyme';
import ErrorHandler from './ErrorHandler';

describe('Launch Page', () => {
  it('renders without crash', () => {
    const errorHandler = shallow(<ErrorHandler />);
    expect(errorHandler).toMatchSnapshot();
  });
});
