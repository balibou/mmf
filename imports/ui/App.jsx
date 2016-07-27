import React, { Component } from 'react';

import LandingPage from './LandingPage';

export default class App extends Component {

  renderLandingPage() {
    return <LandingPage />;
  }

  render() {
    return (
      <div className="container">
        {this.renderLandingPage()}
      </div>
    );
  }
}
