import React, { Component } from 'react';
import Checkbox from './../components/Checkbox.js';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state={
      doOnboarding: false,
      extraAllergies: false,
      allergylist: [
        'Tree Nut',
        'Peanut',
        'Shellfish',
        'Gluten',
        'Dairy',
      ]
    }
  this.toggleAllergies = this.toggleAllergies.bind(this);
  }

  toggleAllergies(){
    if( this.state.extraAllergies ){
       this.setState({
        allergylist: [
          'Tree Nut',
          'Peanut',
          'Shellfish',
          'Gluten',
          'Dairy',
        ],
        extraAllergies: false
      })
    } else {
        this.setState({
        allergylist: [
          'Tree Nut',
          'Peanut',
          'Shellfish',
          'Gluten',
          'Dairy',
          'Soy', 
          'Fish' ,
          'Eggs',
          'Sesame' ,
          'Mustard'
        ],
        extraAllergies: true
      })
    }
  }

  render(){

    var toggleAllergies = this.state.extraAllergies;

    var allergies = this.state.allergylist; 

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
      <div>
      { this.state.doOnboarding ? 
        (
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
                allergies.map((allergy , index ) => 
                  <Checkbox checkboxStyle='large-selection' key = {index} label={`${allergy}-Free`} checkboxid={allergy.split(' ').join('_')} />
                )
              }

              { this.state.extraAllergies ? 
                (
                  <div class="form-group">
                    <input type="text" placeholder='Search...'/>
                  </div>
                ) 
                :
                (
                  ""
                )
              }

              <span onClick={this.toggleAllergies} className='button textonly'>{ toggleAllergies ? 'Less' : 'More' }</span>
              </div>
             
              <h3>Diets</h3>
              <div className='selection-pool list-block'>
              {
                diets.map( (diet, index) => 
                  <Checkbox checkboxStyle='large-selection' key={index} label={diet} checkboxid={diet.split(' ').join('_')} />
                )
              }
              </div>     
          </fieldset>
        </form>
        )
        :
        (
          <div>
             <ul>
               <li>Mealplan</li>
               <li>Recipes</li>
               <li>Pricebook</li>
               <li>Pantry</li>
               <li>Shopping List</li>
               <li>Settings</li>
             </ul>
          </div> 
        )
      }
      </div>
    )
  }
}

export default Dashboard;