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
      <h1>Foods List</h1> 
      <form>
        <input type="text" placeholder="Search..." class="search" />
        <button>Go</button>
      </form>

      <ul>
        {foods.map(food => <li>
          <a href={`food/${food.id}`}>
          {food.name}
          </a>
       </li>)}
      </ul>
    </div>
    );
  }
}

export default FoodList;