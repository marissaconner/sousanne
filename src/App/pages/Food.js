import React, { Component } from 'react';

class Food extends Component {
   constructor(props){
    super(props);
    this.state = {
      food: null,
    }
  }

componentDidMount(){
  this.getFood();
}

getFood = () => {
  const id = this.props.match.params.foodid;
  console.log( "Fetching food information." );
  fetch(`/api/foods/${foodid}`)
  .then ( res => res.json())
  .then( food => this.setState({ food }));
}

render() {
    const food = this.state.food; 

   return (
    <div>
      <h1>Food Name</h1>

      { food.productlist ? 
        (
          <div>
          Food product listing here
          </div>
        )
        : 
        (
          <div>
          Add a price
          </div>
        )}
    </div>
   )
}

}