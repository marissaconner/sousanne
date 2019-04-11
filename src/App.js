import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupForm from './App/components/SignupForm.js';
class App extends Component {
  render() {
    return (
      <div>
        <SignupForm />
      </div>
    );
  }
}

export default App;