import React, { Component } from 'react';

class FoodList extends Component {
   constructor(props){
    super(props);
    this.state = {
      foods: []
    }
  }

  componentDidMount(){
    this.getFoods();
  };

  getFoods = () =>{
    console.log( "Fetching Food list");
    fetch('/api/foods')
    .then( res => res.json()) 
    .then( foods => this.setState({ foods }) )
  };

  render() {
    const foods = this.state.foods;
    return (
    <div>
      <h1>Your Foods</h1> 
      <ul>
        {foods.map(food => <li>
          {food.name}
       </li>)}
      </ul>
    </div>
    );
  }
}

export default FoodList;