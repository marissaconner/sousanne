import React, { Component } from 'react';

class SignupForm extends Component {
  constructor( props ){
    super( props )
    this.state = {
      hidePassword: true,
      formValid: false,
      signupEmail: '',
      signupPassword: '',
      emailValid: false,
      passwordValid: false
    }
    this.togglePassword = this.togglePassword.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  };

  handleEmailInput(){
  }

  handlePasswordInput(){
  }

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
        <input
          type='text' 
          placeholder='email@address.com'
          value={this.state.signupEmail}
          id='signup-email' 
          name='signup-email'
          onChange = {() => this.handleEmailInput()}
        />
      </div>

      <div className='form-group'>
        <label for='signup-password'>Password</label>
        <span 
          class='pin pin-right' 
          onClick={this.togglePassword}>
            {this.state.hidePassword ? 'Show' : 'Hide'}
        </span>
        <input 
          type={ this.state.hidePassword ? 'password' : 'text' }
          value={this.state.signupPassword}
          id='signup-password'
          name='signup-password'
          onChange = {() => this.handlePasswordInput()}
        />
      </div>
      <button className={ this.state.formValid ? 'primary' : 'disabled' } disabled={!this.state.formValid}>Create Account</button>
    </form>
  )
  }
}

export default SignupForm;