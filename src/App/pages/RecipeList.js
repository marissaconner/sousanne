import React, { Component } from 'react';


class RecipeList extends Component {
   constructor(props){
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentDidMount(){
    this.getRecipes();
  };

  getRecipes = () =>{
    console.log( "Fetching recipes");
    //This is going to array of objects on your hands at this point
    fetch('/api/recipes')
    .then( res => res.json()) 
    .then( recipes => this.setState({ recipes }) )
  };

  render() {
    const recipes = this.state.recipes;
    return (
    <div>
        <h1>Browsing Recipes</h1> 
        <ul>
          {recipes.map(recipe => <li>
            <a href={`recipe/${recipe.name}`}>
            {recipe.name}
            </a>
            </li>)}
        </ul>
    </div>
    );
  }
}
export default RecipeList;