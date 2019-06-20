import React, { Component } from 'react';

const PriceForm = ({ index, brand, amount, store, storeList, updateAmount, updateBrand, updateStore, removePrice }) => 
    <div className="formgroup flexbox" >
      <label htmlFor='price'>$</label>
      <input id={`price-${index}`} type='number' name='amount' value={amount} onChange={updateAmount}/> at
      <select value={store} onChange={updateStore} name='store' id={`store-${index}`}>
        {
          storeList ? 
                (
                 storeList.map( (store, index) => <option key={index} value={store.id}>{store.name}</option>)
                ) : ""
              }
              <option>Add A Store</option>
      </select>
      <label htmlFor="brand">Brand</label>
      <input type="text" id={`brand-${index}`} name="brand" value={brand} onChange={updateBrand}/>
      <span className='close' onClick={() => removePrice( index )}>&times;</span>
    </div>

export default PriceForm;