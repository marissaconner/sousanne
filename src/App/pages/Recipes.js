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
  }

  render() {
    const { recipes } = this.state;
    return (
    <div>
        <h1>Browsing Recipes</h1>
        { recipes.length ? (
           <div>
           {recipes.map((item) => {
            return (
              <div>
                  {item}
              </div>
              );
           })}
           </div>
          ) : (
            <div>No recipes. {recipes.length}</div>
          )
        }
    </div>
    );
  }
}
export default Recipes;