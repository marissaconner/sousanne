import React, { Component } from 'react';
import SearchInput from '../components/SearchInput.js';
import foodFunctions from  '../functions/foodFunctions.js';

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

  getFoods = foodFunctions.getFoods;
  searchFoods = foodFunctions.searchFoods;

  clearSearch = () => {
    this.setState( {searchString: ""})
    this.getFoods();
  }

  
  render() {
    const foods = this.state.foods;
    return (
    <div>
      <h1>Foods List</h1> 
      <form>
      <SearchInput searchString={this.state.searchString} onQueryChange={this.searchFoods} clearSearch={this.clearSearch} />
      </form>

      <ul>
        {foods.map(food => 
          <a href={`food/${food.id}`}>
            <li>
              {food.name}
            </li>
          </a>
        )}
      </ul>
    </div>
    );
  }
}

export default FoodList;