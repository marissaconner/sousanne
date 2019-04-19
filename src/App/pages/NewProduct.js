import React, { Component } from 'react';

class NewProduct extends Component {
   constructor(props){
    super(props);
    this.state = {
      packaged : false,
      multipack: false,
    }
  }

  toggleMultipack(){
    const value = !this.state.multipack
    this.setState({ multipack: value })
  }

  setPackaging( value ) {
    this.setState({ packaged: value })
  }
  render() {

    const bulkunits = [
    'Pound',
    'Ounce',
    'Gram',
    'Litre',
    'Dozen',
    'Piece'
    ]

    const units = [
      'Fluid ounces',
      'Gallons',
      'Grams',
      'Litres',
      'Millilitres',
      'Ounces',
      'Pieces',
      'Pints',
      'Pounds',
      'Quarts'
    ]
    return (
    <form>
        <h1>Food Name</h1>

        <div className="form-group">
          <label htmlFor="aisle">Aisle</label>
          <input type="text" name="aisle" id="aisle" />
        </div>

        <fieldset>
          <legend>Product Information</legend>

          <div className="form-group">
            <input type="radio" value="false" id="isnotpackaged" onChange={()=> this.setPackaging(false) } checked={!this.state.packaged} /><label htmlFor="isnotpackaged">Sold by the...</label>
            { this.state.packaged ? "" : (
              <select>
                {bulkunits.map(unit => <option>{unit}</option>)}
              </select>
            )}

            <input type="radio" value="true" id="ispackaged"  onChange={()=> this.setPackaging(true) } checked={this.state.packaged} /> <label htmlFor="ispackaged">Packaged item</label>
          </div>
        </fieldset>

        { this.state.packaged ? 
          ( 
            <fieldset>
              <legend>Each item contains...</legend>

              <input type="number" />
              <select>
                {units.map(unit => <option>{unit}</option>)}
              </select>

              <input type='checkbox' id='ismultipack' onChange={()=>this.toggleMultipack()} /> <label htmlFor='ismultipack'>Sold in a multipack of...</label>
              {this.state.multipack ? (<input type='number' id='multipackcount' value={this.state.multipackCount} />) : ""}
            </fieldset>
          ) : ""
        }

        <span className="btn bare">Add Price</span>

        <button>Save</button>
    </form>
    );
  }
}
export default NewProduct;