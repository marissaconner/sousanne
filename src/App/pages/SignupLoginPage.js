import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.js';
import SignupForm from '../components/SignupForm.js';

class SignupLoginPage extends Component {
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
      },
      formAction: 'signup'
    }
    this.togglePassword = this.togglePassword.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.doSignup = this.doSignup.bind(this);
    this.doLogin = this.doLogin.bind(this);
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

  doSignup(){
    this.setState({ formAction: 'signup' })
  }

  doLogin(){
    this.setState({ formAction: 'login' })
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
      <div id="splash">
      <div className='container-reading'>
      <div id="masthead">
        <h1>Sousanne</h1>
        <span>
          Eat healthy on a dime.
        </span>
      </div>

  <div className="tab-group bright">
      <div className={this.state.formAction === 'signup' ? 'tab active' : 'tab' } onClick={this.doSignup}>
        Sign Up
      </div>
      <div className={this.state.formAction === 'login' ? 'tab active' : 'tab' }  onClick={this.doLogin}>
        Log In
      </div>
  </div>

  <form noValidate>
      {
        this.state.formAction === 'signup' ? 
        (
          <SignupForm 
            handleInput={this.handleInput}
            emailString={this.state.email}
            passwordString={this.state.password}
            togglePassword={this.togglePassword}
            hidePassword={this.state.hidePassword}
          />
        ) :
        (
          <LoginForm 
            handleInput={this.handleInput} 
            emailString={this.state.email} 
            passwordString={this.state.password}
          />
        )
      }      
     
      <div className='form-group'>
        <button className={ this.state.formValid ? 'primary full-width' : 'disabled full-width' } disabled={!this.state.formValid}>
        {this.state.formAction === 'signup' ? 'Create Account' : 'Log In' }
        </button>
      </div>
    </form>
    </div>
    </div>
  )
  }
}

export default SignupLoginPage;