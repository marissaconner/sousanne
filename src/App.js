import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupLoginPage from './App/pages/SignupLoginPage.js';
import Homepage from './App/pages/Homepage.js';
import List from './App/pages/List.js';
import Recipes from './App/pages/Recipes.js';

class App extends Component {
  render() {

  const App = () => (
    <div>
      <Switch>
        <Route exact path='/' component={SignupLoginPage}/>
        <Route path='/home' component={Homepage}/>
        <Route path='/list' component={List}/>
        <Route path='/recipes' component={Recipes}/>
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