var foodFunctions = {
 'searchFoods': function(e) {
    this.setState({ searchString : e.target.value });
    const query = this.state.searchString;
    if( e.target.value !== "" ){
      console.log("Searching for foods", query );
      fetch('api/search/food/' + query )
      .then( res => res.json())
      .then( foods => this.setState({foods}))
    }
    else {
      this.getFoods();
    }
  },
  'getFoods': function() {
    console.log( "Fetching Food list");
    fetch('/api/foods')
    .then( res => res.json()) 
    .then( foods => this.setState({ foods }) )
  }
}

export default foodFunctions;