import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupLoginPage from './App/components/SignupLoginPage.js';
class App extends Component {
  render() {
    return (
      <div id='splash'>
        <SignupLoginPage />
      </div>
    );
  }
}

export default App;