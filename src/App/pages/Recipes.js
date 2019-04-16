import React, { Component } from 'react';


class Recipes extends Component {
   constructor(props){
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentDidMount(){
    this.getRecipes();
  }

  getRecipes = () =>{
    console.log( "Fetching recipes");
    //This is going to array of objects on your hands at this point
    fetch('/api/getRecipes')
    .then( res => res.json()) 
    .then( recipes => this.setState({ recipes }) )
  }

  render() {
    const recipes = this.state.recipes;
    return (
    <div>
        <h1>Browsing Recipes</h1> 
        <ul>
          {recipes.map(recipe => <li>{recipe.name}</li>)}
        </ul>
    </div>
    );
  }
}
export default Recipes;