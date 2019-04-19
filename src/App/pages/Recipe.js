import React, { Component } from 'react';
import Ingredient from '../components/Ingredient.js';

class Recipe extends Component {
   constructor(props){
    super(props);
    this.state = {
      display: 'ingredients',
      recipe: {}
    }
    this.updateDisplay = this.updateDisplay.bind(this);
  };
  
  updateDisplay( which ){
    this.setState({display: which});
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

        <div className='tab-group'>
          <div className={this.state.display === 'ingredients' ? 'tab active' : 'tab' } onClick={()=>this.updateDisplay('ingredients')}>
            Ingredients
          </div>
          <div className={this.state.display === 'instructions' ? 'tab active' : 'tab' } onClick={()=>this.updateDisplay('instructions')}>
            Instructions
          </div>
          <div className={this.state.display === 'nutrition' ? 'tab active' : 'tab' }>
            Nutrition
          </div>
        </div>

        <div id='ingredients' className={this.state.display === 'ingredients' ? '' : 'hidden' }>
          {
            ingredients ? 
            (
              <ul className='checklist ingredients'>
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
     

        <div id='instructions' className={this.state.display === 'instructions' ? '' : 'hidden' }>
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

