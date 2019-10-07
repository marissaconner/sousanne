import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupLoginPage from './App/pages/SignupLoginPage.js';
import RecipeList from './App/pages/RecipeList.js';
import StoreList from './App/pages/StoreList.js';
import FoodList from './App/pages/FoodList.js';
import Food from './App/pages/Food.js';
import Recipe from './App/pages/Recipe.js';
import NewProduct from './App/pages/NewProduct.js';
import Dashboard from './App/pages/Dashboard.js';

class App extends Component {
  render() {

  const App = () => (
    <div>
      <Switch>
        <Route exact path='/' component={SignupLoginPage}/>
        <Route path='/recipes' component={RecipeList}/>
        <Route path='/recipe/:recipename' component={Recipe}/>
        <Route path='/stores' component={StoreList}/>
        <Route path='/foods' component={FoodList}/>
        <Route path='/food/:id' component={Food}/>
        <Route path='/product/new/:id' component={NewProduct}/>
        <Route path='/home' component={Dashboard}/>
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