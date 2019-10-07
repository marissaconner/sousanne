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
    ];

    var extraAllergies = [ 
      'Soy', 
      'Fish' ,
      'Eggs',
      'Sesame' ,
      'Mustard' 
    ];

    var diets = [
      'Vegetarian',
      'Vegan',
      'Low Carb',
      'Keto',
      'Paleo',
      'Kosher',
      'Halal'      
    ];
  
    return(

      <form className='form'>
        <fieldset className='inline'>
            <legend>
              Family Size
            </legend>

              <div className='form-group'>
                <input id='number-adults' className='tiny inlineblock' type='number' />
                <label htmlFor='number-adults'>adults</label>
                <p className='small'>18 &amp; up</p>
              </div>

              <div className='form-group'>
                <input id='number-teenagers' className='tiny inlineblock' type='number' />
                <label htmlFor='number-teenagers'>teenagers</label>
                <p className='small'>13 to 17</p>
              </div>

              <div className='form-group'>
                <input id='number-children' className='tiny inlineblock'  type='number' />
                <label htmlFor='number-children'>children</label>
                <p className='small'>12 and under</p>
              </div>
        </fieldset>

        <a className='aslink center'>Advanced</a>
        <p className='small'>Add each family member's age and weight for a healthier, more affordable mealplan</p>

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
            <a href='#' className='button textonly'>More...</a>
            </div>
           
            <h3>Diets</h3>
            <div className='selection-pool list-block'>
            {
              diets.map(diet => 
                <Checkbox checkboxStyle='large-selection' label={diet} checkboxid={diet.split(' ').join('_')} />
              )
            }
            </div>     
        </fieldset>
      </form>
    )
  }
}

export default Dashboard;