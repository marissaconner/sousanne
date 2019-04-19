import React, { Component } from 'react';

class NewProduct extends Component {
   constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
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
            <input type="radio" value="false" id="isnotpackaged" /><label htmlFor="isnotpackaged">Sold by the...</label>
            <input type="radio" value="true" id="ispackaged" /> <label htmlFor="ispackaged">Packaged item</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Each item contains...</legend>

          <input type="number" />
          <select>
          {units.map(unit => <option>{unit}</option>)}
          </select>

          <input type='checkbox' id='ismultipack' /> <label htmlFor='ismultipack'>Sold in a multipack of...</label>
          <input type='number' id='multipackcount' />
        </fieldset>

        <span className="btn bare">Add Price</span>

        <button>Save</button>
    </form>
    );
  }
}
export default NewProduct;