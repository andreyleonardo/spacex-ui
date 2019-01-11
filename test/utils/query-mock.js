import gql from 'graphql-tag';

const query = gql`
  query test {
    test {
      id
      name
    }
  }
`;

const mockResponse = {
  test: {
    id: 1,
    name: 'Test'
  }
};

const mocksSuccessQuery = [{
  request: { query },
  result: {
    data: mockResponse
  },
}];

const mocksFailQuery = [
  {
    request: { query },
    error: new Error()
  },
];

export { mocksFailQuery, mocksSuccessQuery, query };
