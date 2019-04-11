import React, { Component } from 'react';

class SignupForm extends Component {
  constructor( props ){
    super( props )
    this.state = {
      hidePassword: true
    }
    this.togglePassword = this.togglePassword.bind(this);
  };

  togglePassword(){
    this.setState({
      hidePassword: !this.state.hidePassword
    })
  };

  render(){
    return(
  <form>
      <h2>Create Account</h2>
      <p>
        Eating well doesn't have to mean breaking the bank.  Create an account to save time and money through Sousanne's budget-conscious recipes, price books, and generated mealplans. 
      </p>

      <div className='form-group'>
        <label for='signup-email'>Email</label>
        <input type='text' placeholder='email@address.com' id='signup-email' name='signup-email'/>
      </div>
      <div className='form-group'>
        <label for='signup-password'>Password</label>
        <span class='eyeball' onClick={this.togglePassword}>{this.state.hidePassword ? 'Show' : 'Hide'}</span>
        <input type={ this.state.hidePassword ? 'password' : 'text' } id='signup-password' name='signup-password' />
      </div>
      <button>Create Account</button>
    </form>
  )
  }
}

export default SignupForm;