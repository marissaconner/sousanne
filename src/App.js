import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupLoginPage from './App/pages/SignupLoginPage.js';
import RecipeList from './App/pages/RecipeList.js';
import Recipe from './App/pages/Recipe.js';
import NewProduct from './App/pages/NewProduct.js';

class App extends Component {
  render() {

  const App = () => (
    <div>
      <Switch>
        <Route exact path='/' component={SignupLoginPage}/>
        <Route path='/recipes' component={RecipeList}/>
        <Route path='/recipe/:recipename' component={Recipe}/>
        <Route path='/product/new' component={NewProduct}/>
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