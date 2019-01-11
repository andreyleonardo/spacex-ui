import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

const QueryWrapper = ({ query, children, variables }) => (
  <Query query={query} variables={variables}>
    {({ loading, error, data }) => {
      if (loading) return <div id="loading-id">Loading...</div>;
      if (error) return <div id="error-id">Ops... Try again</div>

      return children(data);
    }}
  </Query>
);

QueryWrapper.propTypes = {
  query: PropTypes.shape({}).isRequired
};

export default QueryWrapper;
