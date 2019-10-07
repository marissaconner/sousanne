import React, { Component } from 'react';
import Checkbox from './../components/Checkbox.js';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    var allergies = [
      'Tree Nut',
      'Peanut',
      'Shellfish',
      'Gluten',
      'Dairy',
      'Soy',
      'Fish',
      'Eggs',
      'Sesame',
      'Mustard'
    ];
    var diets = [
      'Low Carb',
      'Keto',
      'Paleo',
      'Halal',
      'Kosher',
      'Vegan',
      'Vegetarian',
    ];
  
    return(

      <form>

        <fieldset>
            <legend>
              Family Size
            </legend>

            <div className='form-group'>
              <input id='number-adults' type='number' />
              <label htmlFor='number-adults'>adults</label>
              <p>18 &amp; up <span className='aslink'>Advanced</span></p>
            </div>

            <div className='form-group'>
              <input id='number-teenagers' type='number' />
              <label htmlFor='number-teenagers'>teenagers</label>
              <p>13 to 17 <span className='aslink'>Advanced</span></p>
            </div>

            <div className='form-group'>
              <input id='number-children' type='number' />
              <label htmlFor='number-adults'>adults</label>
              <p>12 and under <span className='aslink'>Advanced</span></p>
            </div>
        </fieldset>

        <fieldset>
            <legend>Food Restrictions</legend>
            <p>Do you have any allergies or food preferences?</p>

            <h3>Allergies</h3>
            <div className='selection-pool list-block'>
            {
            
              allergies.map(allergy => 
                <Checkbox checkboxStyle='large-selection' label={`${allergy}-Free`} checkboxid={allergy.split(' ').join('_')} />
              )
            }
            </div>
           
            <h3>Diets</h3>
            <div className='selection-pool'>
            {
              diets.map(diet => 
                <Checkbox checkboxStyle='large-selection' label={diet} checkboxid={diet.split(' ').join('_')} />
              )
            }
            </div>     
            <a>Show More</a>
        </fieldset>
      </form>
    )
  }
}

export default Dashboard;