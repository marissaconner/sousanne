import React, { Component } from 'react';

class NewProduct extends Component {
   constructor(props){
    super(props);
    this.state = {
      food: {},
      storelist: [],
      unitlist: [],
      packaged : false,
      multipack: false,
    }
  }

componentDidMount(){
    this.getFood();
    this.getStores();
    this.getBulkUnits();
  }

  toggleMultipack(){
    const value = !this.state.multipack
    this.setState({ multipack: value })
  }

  setPackaging( value ) {
    this.setState({ packaged: value })
  }

  getFood = () => {
  const id = this.props.match.params.id;
  console.log( "Fetching food information." );
  fetch(`/api/food/${id}`)
  .then ( res => res.json())
  .then( food => this.setState({ food }));
  }

  getBulkUnits = () =>{
    fetch(`/api/units/bulk`)
    .then( res => res.json())
    .then( unitlist => this.setState({ unitlist }) )
  }

  getStores = () =>{  
    fetch(`/api/stores`)
    .then( res => res.json())
    .then( storelist => this.setState({ storelist }))
  };

  render() {

    const food = this.state.food;
    const unitlist = this.state.unitlist;

    return (
    <form>
        <h1>{food.name}</h1>

        <div className="form-group">
          <label htmlFor="aisle">Aisle</label>
          <input type="text" name="aisle" id="aisle" />
        </div>

        <fieldset>
          <legend>Product Information</legend>

            <div className="flexbox formgroup">
            <div className="half">
            <input type="radio" value="false" id="isnotpackaged" onChange={()=> this.setPackaging(false) } checked={!this.state.packaged} /><label htmlFor="isnotpackaged">Sold by the...</label>
            </div>
            { this.state.packaged ? "" : (
                <select className="half">
                  {unitlist.map(unit => <option selected={ (unit.name === "pound") ? "selected" : null } value={unit.id}>{unit.name}</option>)}
                </select>
            )}
            </div>
       
          <div className="form-group inline">
            <input type="radio" value="true" id="ispackaged"  onChange={()=> this.setPackaging(true) } checked={this.state.packaged} /> <label htmlFor="ispackaged">Packaged item</label>
          </div>
        </fieldset>

        { this.state.packaged ? 
          ( 
            <fieldset>
              <legend>Each item contains...</legend>

              <div className="flexbox formgroup">
                <input className="third column" type="text" />
                <select className="twothirds column">
                  {unitlist.map(unit => <option selected={ (unit.name === "ounce" ) ? "selected" : null } value={unit.id}>{unit.name}s</option>)}
                </select>
              </div>

              <div className="flexbox formgroup">
                <div className="twothirds column">
                  <input  type='checkbox' id='ismultipack' onChange={()=>this.toggleMultipack()} /> <label htmlFor='ismultipack'>Sold in a multipack of...</label>
                </div>
                <div className="fourth">
                {this.state.multipack ? (<input type='number' id='multipackcount' value={this.state.multipackCount} />) : ""}
                </div>
              </div>
            </fieldset>
          ) : ""
        }

        <span className="btn bare">Add Price</span>
        <div className="formgroup flexbox">
          <label for='price'>$</label>
          <input id='price' type='text' /> at
          <select>
            {
              this.state.storelist ? 
              (
                this.state.storelist.map( store => <option value={store.id}>{store.name}</option>)
              ) : ""
            }
            <option>Add A Store</option>
          </select>

          <label htmlFor="brand">Brand</label>
          <input type="text" name="brand" id="brand" />
        
        </div>
        <button>Save</button>
    </form>
    );
  }
}
export default NewProduct;