import React from 'react';
import { mount, shallow } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import QueryWrapper from './QueryWrapper';
import { query, mocksFailQuery, mocksSuccessQuery } from '../../../test/utils/query-mock';

describe('Query Wrapper', () => {
  it('renders without crash', () => {
    const queryWrapper = shallow(<QueryWrapper query={{ query: 'query' }} />);
    expect(queryWrapper).toMatchSnapshot();
  });

  it('renders a loading component when its querying', () => {
    const queryWrapper = mount(
      <MockedProvider mocks={[]}>
        <QueryWrapper query={query} />
      </MockedProvider>
    );

    expect(queryWrapper.exists('div#loading-id')).toBeTruthy();
  });

  it('renders an error component when query fails', async () => {
    const queryWrapper = mount(
      <MockedProvider mocks={mocksFailQuery} addTypename={false}>
        <QueryWrapper query={query} />
      </MockedProvider>
    );

    await wait(0);

    queryWrapper.update();

    expect(queryWrapper.exists('div#error-id')).toBeTruthy();
  });

  it('renders a children component when query success', async () => {
    const queryWrapper = mount(
      <MockedProvider mocks={mocksSuccessQuery} addTypename={false}>
        <QueryWrapper query={query} >
          {({ test }) =>(
            <>
              <span id="id">{test.id}</span>
              <span id="name">{test.name}</span>
            </>
          )}
        </QueryWrapper>
      </MockedProvider>
    );

    await wait(0);

    queryWrapper.update();

    expect(queryWrapper.exists('span#id')).toBeTruthy();
    expect(queryWrapper.exists('span#name')).toBeTruthy();
    expect(queryWrapper.find('span#id').text()).toBe("1");
    expect(queryWrapper.find('span#name').text()).toBe('Test');
  });
});
