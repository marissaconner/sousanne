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
  const unit = this.state.ingredient.unit;
  return(
  <li>
      { ingredient ? (
      <span>
        {this.props.amount} {unit.name} {ingredient.name} {this.props.comment ? `, ${this.props.comment}` : "" } 
      </span>) : 'Loading Ingredients'}
  </li>
  )
  }
}
export default Ingredient