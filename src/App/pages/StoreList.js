import React, { Component } from 'react';

class StoreList extends Component {
   constructor(props){
    super(props);
    this.state = {
      stores: []
    }
  }

  componentDidMount(){
    this.getStores();
  };

  getStores = () =>{
    console.log( "Fetching store list");
    //This is going to array of objects on your hands at this point
    fetch('/api/stores')
    .then( res => res.json()) 
    .then( stores => this.setState({ stores }) )
  };

  render() {
    const stores = this.state.stores;
    return (
    <div>
      <h1>Your Stores</h1> 
      <ul>
        {stores.map(store => <li>
          {store.name}
       </li>)}
      </ul>
    </div>
    );
  }
}

export default StoreList;