import React, { Component } from 'react';


class Recipe extends Component {
   constructor(props){
    super(props);
    this.state = {
      recipe: []
    }
  }

  componentDidMount(){
    const recipename = this.props.match.params.recipename;
    console.log( "Recipe is...");
    console.log( recipename );
    fetch(`/api/getRecipe/${recipename}`)
    .then( res => res.json()) 
    .then( recipe => this.setState({ recipe }) )
  }
 
  render() {
    const recipe = this.state.recipe;
    return (
    <div>
        <h1>Individual Recipe</h1> 
        {recipe.name}
    </div>
    );
  }
}
export default Recipe;