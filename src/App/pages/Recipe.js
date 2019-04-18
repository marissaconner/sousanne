import React, { Component } from 'react';


class Recipe extends Component {
   constructor(props){
    super(props);
    this.state = {
      recipe: {
        foods: []
      }
    }
  }


  getIngredient( ingredient ){
    fetch(`api/ingredients/${ingredient}`)
    .then( function( response ){
      return response;
    })
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
                  <li>
                    {ingredient.id}
                    { ingredient.comment ? <span>{ingredient.comment}</span> : '' }
                  </li>
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