import { launchCardDetails, launchDetails } from './launches';

describe('Launches Queries', () => {
  it('returns a launchCardDetails query', () => {
    expect(launchCardDetails).toMatchSnapshot();
  });
  it('returns a launchDetails query', () => {
    expect(launchDetails).toMatchSnapshot();
  });
});
