import React, { Component } from 'react';
import Ingredient from '../components/Ingredient.js';

class Recipe extends Component {
   constructor(props){
    super(props);
    this.state = {
      recipe: {}
    }
  }

  componentDidMount(){
    const recipename = this.props.match.params.recipename;
     fetch(`/api/recipes/${recipename}`)
    .then( res => res.json()) 
    .then( recipe => this.setState({ recipe }) )
  }


  render() {
    const recipe = this.state.recipe;
    const instructions = recipe.Instructions;
    const ingredients = recipe.Ingredients;

    return (
    <div>
        <a href='/recipes'>Back</a>
        <h1>
          {recipe.name ? recipe.name : 'Loading...'}
        </h1> 

        <div id='ingredients'>
          {
            ingredients ? 
            (
              <ul>
              {
                ingredients.map( ingredient => 
                  <Ingredient 
                    amount = {ingredient.amount}
                    ingredientId={ingredient.id}
                    comment = {ingredient.comment} 
                  />
                )
              }
              </ul>
            )
            : "Loading..."
          }
        </div>

        <div id='instructions'>
        { instructions ?  
          (
            <ol>
              {
                instructions.map( step => 
                  <li>
                  <b>
                    {step.index + 1}.  
                  </b>
                  {step.instruction}
                  </li>
                )
              }
              </ol>
            )
         : "Loading..." }
        </div>
    </div>
    );
  }
}
export default Recipe;

