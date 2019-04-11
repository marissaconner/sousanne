import React, { Component } from 'react';

class SignupForm extends Component {
  constructor( props ){
    super( props );
    this.state = {
      hidePassword: true,
      formValid: false,
      email: '',
      password: '',
      emailValid: false,
      passwordValid: false,
      formErrors: {
        email: "",
        password: ""
      }
    }
    this.togglePassword = this.togglePassword.bind(this);
    this.handleInput = this.handleInput.bind(this);
  };

  hasErrorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  validateForm() {
    console.log("Validating");
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.passwordValid
    });
  }

  handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };


  validateField(fieldName, value) {
    let formValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let message = '';

    if (fieldName === "email") {
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      formValidationErrors.email = emailValid
        ? ""
        : "is not in the proper format";
      emailValid = emailValid ? true : false;
    } else {
      let isValid = false;
      if (value.length < 8) {
        isValid = false;
        message = "must be at least 8 characters long.";
      } else {
        isValid = true;
      }
      formValidationErrors.password = message;
      passwordValid = isValid; 
    }

    this.setState(
      {
        formErrors: formValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  submitForm(e){
    e.preventDefault();
  }

  togglePassword(){
    this.setState({
      hidePassword: !this.state.hidePassword
    })
  };

  render(){
    return(
  <form noValidate>
      <h2>Create Account</h2>
      <p>
        Eating well doesn't have to mean breaking the bank.  Create an account to save time and money through Sousanne's budget-conscious recipes, price books, and generated mealplans. 
      </p>

      <div className='form-group'>
        <label for='signup-email'>Email</label>
        <input
          type='email'
          placeholder='email@address.com'
          id='signup-email'
          value = {this.state.email}
          name = 'email'
          onChange = {this.handleInput}
        />
      </div>

      <div className='form-group'>
        <label for='signup-password'>Password <span className='regular'>(8 characters or more)</span></label>
        <span 
          class='pin pin-right' 
          onClick={this.togglePassword}>
            {this.state.hidePassword ? 'Show' : 'Hide'}
        </span>
        <input 
          type={ this.state.hidePassword ? 'password' : 'text' }
          value={this.state.password}
          id='signup-password'
          name='password'
          onChange = {this.handleInput}
        />
      </div>
      <button className={ this.state.formValid ? 'primary' : 'disabled' } disabled={!this.state.formValid}>Create Account</button>
    </form>
  )
  }
}

export default SignupForm;