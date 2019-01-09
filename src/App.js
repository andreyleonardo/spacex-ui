import React, { Component } from 'react';
import { Query } from 'react-apollo';
import launchesQuery from './queries/launches';

import './App.scss';

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
              if (error) return <div>Ops... Try again</div>

              return data.launches.map(launch => (
                <div key={launch.mission_name} className="row launch-card">
                  <div className="col-xs">
                    <p>{launch.mission_name}</p>
                    <p>{launch.launch_year}</p>
                  </div>
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
