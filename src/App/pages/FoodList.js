import React, { Component } from 'react';

class FoodList extends Component {
   constructor(props){
    super(props);
    this.state = {
      foods: [],
      searchString : ""
    }

    this.searchFoods = this.searchFoods.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
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

  clearSearch = () => {
    this.setState( {searchString: ""})
    this.getFoods();
  }

  searchFoods = e => {
    this.setState({ searchString : e.target.value });
    const query = this.state.searchString;
    if( e.target.value !== "" ){
      console.log("Searching for foods", query );
      fetch('api/search/food/' + query )
      .then( res => res.json())
      .then( foods => this.setState({foods}))
    }
    else {
      //Show all foods bc they cleared the search.
      this.getFoods();
    }
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
          value={this.state.searchString}
          onChange = {this.searchFoods}
        />
        <span className='button transparent' onClick = {this.clearSearch} >&times;</span>
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