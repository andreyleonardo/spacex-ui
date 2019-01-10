import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './LaunchDetails.scss';

const LaunchDetails = ({ data }) => (
  <div className="LaunchDetails row">
    <header className="LaunchDetails__header col-xs-12">
      <h1>{`SpaceX - Mission: ${data.mission_name}`}</h1>
    </header>
    <div className="LaunchDetails__content col-xs col-sm-8 col-sm-offset-2">
      <div className="row">
        <div className="col-xs-12 col-sm">
          <h2>Mission Details</h2>
          <p><span>Name: {data.mission_name}</span></p>
          <p><span>Year: {data.launch_year}</span></p>
          <p>
            <span>Succeeded: </span>
            <span
              className={
                classnames(
                  'LaunchDetails__launch_status',
                  { 'LaunchDetails__launch_status--failed': !data.launch_success }
                )
              }
            >
              {data.launch_success ? 'Yes' : 'No'}
            </span>
          </p>
        </div>
        <div className="col-xs-12 col-sm">
          <h2>Rocket Details</h2>
          <p><span>Name: {data.rocket.rocket_name}</span></p>
          <p><span>Type: {data.rocket.rocket_type}</span></p>
        </div>
      </div>
      <div className="row">
        <Link className="btn btn--small" to="/launches">Back</Link>
      </div>
    </div>
  </div>
);

export default LaunchDetails;
