import React, { Component } from 'react';

class Ingredient extends Component{
  constructor(props){
    super(props)
    this.state = {
      ingredient: {}
    }
  }

  componentDidMount(){
    fetch(`/api/ingredients/${this.props.ingredientId}`)
    .then( res => res.json()) 
    .then( ingredient => this.setState({ ingredient }) )
  }

  render(){
  const ingredient = this.state.ingredient.food;
  return(
  <li>
      { ingredient ? (
      <span>
      {this.props.amount} {this.props.ingredientId}
      {ingredient.name}
      </span>) : 'Loading Ingredients'}
  </li>
  )
  }
}
export default Ingredient