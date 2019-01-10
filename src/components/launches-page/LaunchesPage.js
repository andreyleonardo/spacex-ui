import React, { Component } from 'react';
import { launchCardDetails } from '../../queries/launches';
import { withRouter } from 'react-router-dom';
import Card from './card/Card';
import QueryWrapper from '../query-wrapper/QueryWrapper';

import './LaunchesPage.scss';

class LaunchesPage extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(launchId) {
    const { history } = this.props;
    history.push(`launch/${launchId}`);
  }

  render() {
    return (
      <div className="Launches">
        <header className="Launches__header">
          <h1>SpaceX - Launches</h1>
        </header>
        <div className="Launches__cards">
          <QueryWrapper query={launchCardDetails}>
            {data => (
              data.launches.map(launch => (
                <Card key={launch.mission_name} data={launch} onClick={() => this.onClick(launch.flight_number)} />
              )))
            }
          </QueryWrapper>
        </div>
      </div>
    );
  }
}

export default withRouter(LaunchesPage);
