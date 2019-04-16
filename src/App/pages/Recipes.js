import React, { Component } from 'react';


class Recipes extends Component {
   constructor(props){
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentDidMount(){
    this.getRecipes();
  }

  getRecipes = () =>{
    console.log( "Fetching recipes");
    fetch('/api/getRecipes')
    .then( res => res.json())
    .then( recipes => this.setState({ recipes }))
    //You have an array of objects on your hands at this point
  }

  render() {
    const { recipes } = this.state;
    return (
    <div>
        <h1>Browsing Recipes</h1>     
    </div>
    );
  }
}
export default Recipes;