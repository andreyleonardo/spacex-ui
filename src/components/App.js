import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LaunchesPage from './launches-page/LaunchesPage';
import LaunchPage from './launch-page/LaunchPage';
import ErrorHandler from './error-handler/ErrorHandler';

import './App.scss';

class App extends Component {
  render() {
    return (
      <ErrorHandler>
        <main className="App">
          <Switch>
            <Redirect exact from="/" to="launches" />
            <Route exact path="/launches" component={LaunchesPage} />
            <Route exact path="/launch/:id" component={LaunchPage} />
          </Switch>
        </main>
      </ErrorHandler>
    );
  }
}

export default App;
