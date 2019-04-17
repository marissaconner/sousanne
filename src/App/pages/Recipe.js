import React, { Component } from 'react';


class Recipe extends Component {
   constructor(props){
    super(props);
    this.state = {
      recipe: {}
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
    console.log( this.state.recipe );
    const recipe = this.state.recipe;
    const instructions = recipe.Instructions;

    return (
    <div>
        <h1>Individual Recipe</h1> 
        {recipe.name}

        <div id='instructions'>
        <ol>
        { instructions ?  
          (
            <li>
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
            </li>
            )
         : "Loading..." }
        </ol>
        </div>
    </div>
    );
  }
}
export default Recipe;