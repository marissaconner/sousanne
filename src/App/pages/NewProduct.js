import React, { Component } from 'react';
import PriceForm from '../components/PriceForm.js'; 

class NewProduct extends Component {
   constructor(props){
    super(props);
    this.state = {
      food: {},
      storelist: [],
      unitlist: [],
      packaged : false,
      multipack: false,
      product: {
        itemAmount: null,
        itemUnit: null,
        multipackCount: null,
        itemSoldByUnit: null,
        aisle: "",
      },
      prices: [
        {
        amount: 0,
        store: 0,
        brand: ""
        },
        {
          amount: 0,
          store: 0,
          brand: ""
        }
      ]
    }

    this.removePrice = this.removePrice.bind(this);
    this.addPrice = this.addPrice.bind(this);
    this.updatePriceAmount = this.updatePriceAmount.bind(this);
    this.updatePriceBrand = this.updatePriceBrand.bind(this);
    this.updatePriceStore = this.updatePriceStore.bind(this);
  }

  updatePriceAmount(index) {
    return e => {
      this.setState({
        ...this.state,
        prices: this.state.prices.map((price, i) => {
          if(i === index) {
            return {
              ...price,
              amount: e.target.value,
            }
          }
          return price
        })
      })
      console.log('Price ' + index + ' amount updated');
    }
  }
  updatePriceBrand(index) {
    return e => {
      this.setState({
        ...this.state,
        prices: this.state.prices.map((price, i) => {
          if(i === index) {
            return {
              ...price,
              brand: e.target.value,
            }
          }
          return price
        })
      })
      console.log('Price ' + index + ' brand updated');
    }
  }
   updatePriceStore(index) {
    return e => {
      console.log( e );
      this.setState({
        ...this.state,
        prices: this.state.prices.map((price, i) => {
          if(i === index) {
            return {
              ...price,
              store: e.target.value,
            }
          }
          return price
        })
      })
      console.log('Price ' + index + ' store updated' );
    }
  }

  handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    }); 
  };

componentDidMount(){
    this.getFood();
    this.getStores();
    this.getBulkUnits();
  }

  removePrice( index ) {
    const newpricelist = this.state.prices;
    newpricelist.splice( index , 1 );
    this.setState({ prices: newpricelist })
  }

  addPrice(){
    let newprices = this.state.prices;
    let newprice = {
      amount: null,
      store: null,
      brand: null
    }
    newprices.push(newprice);
    this.setState({prices: newprices});
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
          <input type="text" name="aisle" id="aisle" onChange={this.handleInput} value={this.state.aisle}/>
        </div>

        <fieldset>
          <legend>Product Information</legend>

            <div className="flexbox formgroup">
            <div className="half">
            <input type="radio" name="packaging" value="false" id="isnotpackaged" onChange={()=> this.setPackaging(false) } checked={!this.state.packaged} /><label htmlFor="isnotpackaged">Sold by the...</label>
            </div>
            { this.state.packaged ? "" : (
                <select className="half" name="item-sold-by-unit" value={this.state.itemSoldByUnit} onChange={this.handleInput} >
                  {unitlist.map( (unit, index) => <option key={index} selected={ (unit.name === "pound") ? "selected" : "" } value={unit.id}>{unit.name}</option>)}
                </select>
            )}
            </div>
       
          <div className="form-group inline">
            <input type="radio" value="true" id="ispackaged" name="packaging"  onChange={()=> this.setPackaging(true) } checked={this.state.packaged} /> <label htmlFor="ispackaged">Packaged item</label>
          </div>
        </fieldset>

        { this.state.packaged ? 
          ( 
            <fieldset>
              <legend>Each item contains...</legend>

              <div className="flexbox formgroup">
                <input className="third column" name='item-amount' type='number' value={this.state.itemAmount} onChange={this.handleInput} />
                <select className="twothirds column" name='item-unit' value={this.state.itemUnit} onChange={this.handleInput}>
                  {unitlist.map( (unit, i) => <option key={i} value={unit.id}>{unit.name}s</option>)}
                </select>
              </div>

              <div className="flexbox formgroup">
                <div className="twothirds column">
                  <input  type='checkbox' name='is-multipack' id='ismultipack' onChange={()=>this.toggleMultipack()} /> <label htmlFor='ismultipack'>Sold in a multipack of...</label>
                </div>
                <div className="fourth">
                {this.state.multipack ? (<input type='number' name='multipack-count' id='multipackcount' value={this.state.product.multipackCount} onChange={this.handleInput} />) : ""}
                </div>
              </div>
            </fieldset>
          ) : ""
        }

        <span className="btn bare">Add Price</span>

        { this.state.prices.map( (price, i ) => 

          <PriceForm 
            index={i}
            brand={price.brand}
            amount={price.amount}
            store={price.store}
            storeList={this.state.storelist}
            updateAmount={this.updatePriceAmount(i)}
            updateBrand={this.updatePriceBrand(i)}
            updateStore={this.updatePriceStore(i)} 
            removePrice={this.removePrice}
          />          

          )}

        <span className='button' onClick={()=>this.addPrice()}>Add Price</span>

        
        <button>Save</button>
    </form>
    );
  }
}
export default NewProduct;