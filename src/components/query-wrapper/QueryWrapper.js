import React from 'react';
import { Query } from 'react-apollo';

const QueryWrapper = ({ query, children, variables }) => (
  <Query query={query} variables={variables}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Ops... Try again</div>

      return children(data);
    }}
  </Query>
);

export default QueryWrapper;
