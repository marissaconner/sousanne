import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupLoginPage from './App/components/SignupLoginPage.js';
import Homepage from './App/pages/Homepage.js';
import List from './App/pages/List.js';

class App extends Component {
  render() {

  const App = () => (
    <div>
      <Switch>
        <Route exact path='/' component={SignupLoginPage}/>
        <Route path='/home' component={Homepage}/>
        <Route path='/list' component={List}/>
      </Switch>
    </div>
  )

    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;