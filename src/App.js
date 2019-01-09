import React, { Component } from 'react';
import { Query } from 'react-apollo';
import launchesQuery from './queries/launches';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App row center-xs">
        <div className="col-xs-12">
          <h1>SpaceX</h1>
        </div>
        <div className="col-xs-12">
          <Query query={launchesQuery}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>;
              return data.launches.map(launch => (
                <div key={launch.mission_name} className="row launch-card">
                  <div className="col-xs">{launch.mission_name}</div>
                  <div className="col-xs">{launch.launch_year}</div>
                </div>
              ));
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default App;
