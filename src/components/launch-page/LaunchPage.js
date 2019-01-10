import React from 'react';
import QueryWrapper from '../query-wrapper/QueryWrapper';
import { launchDetails } from '../../queries/launches';
import LaunchDetails from './launch-details/LaunchDetails';

const LaunchPage = ({ match: { params: { id } } }) => (
  <div className="LaunchPage">
      {console.log(id)}
      <QueryWrapper query={launchDetails} variables={{ flight_number: parseInt(id) }}>
        {({ launch }) => {
          return <LaunchDetails data={launch} />
        }}
      </QueryWrapper>
  </div>
);

export default LaunchPage;
