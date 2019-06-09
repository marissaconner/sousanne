import React, { Component } from 'react';

class Food extends Component {
   constructor(props){
    super(props);
    this.state = {
      food: {},
    }
  }

componentDidMount(){
  this.getFood();
}

getFood = () => {
  const id = this.props.match.params.id;
  console.log( "Fetching food information." );
  fetch(`/api/food/${id}`)
  .then ( res => res.json())
  .then( food => this.setState({ food }));
}

render() {
    const food = this.state.food; 
    const id = this.props.match.params.id;

   return (
    <div>
      <h1>{food.name ? food.name : "Loading..."}</h1>

      { food.productlist ? 
        (
          <div>
          Food product listing here
          </div>
        )
        : 
        (
          <div>
          <a href={`/product/new/${id}`}>Add prices</a>
          </div>
        )}
    </div>
   )
}

}

export default Food;