import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import { mockDate, clearMock } from '../../../../test/utils/mock-date';

describe('Card', () => {
  beforeAll(() => {
    mockDate();
  });
  afterAll(() => {
    clearMock();
  });

  it('renders without crash', () => {
    const card = shallow(<Card data={{}}/>);
    expect(card).toMatchSnapshot();
  });
});
