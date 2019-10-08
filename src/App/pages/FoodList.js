import React, { Component } from 'react';

class FoodList extends Component {
   constructor(props){
    super(props);
    this.state = {
      foods: []
    }

    this.searchFoods = this.searchFoods.bind(this);
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

  searchFoods = e => {
    const query = e.target.value;
    console.log("Searching for foods", query );
    fetch('api/search/food/' + query )
    .then( res => res.json())
    .then( foods => this.setState({foods}))
  };

  render() {
    const foods = this.state.foods;
    return (
    <div>
      <h1>Foods List</h1> 
      <form>
        <input 
          type="text" 
          placeholder="Search..." 
          class="search"
          onChange = {this.searchFoods}
        />
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