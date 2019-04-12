import React from 'react';

const LoginForm = ({ emailString, passwordString, handleInput }) => 
  <div>
    <h2>Welcome Back</h2>
    <p>Sign in to get back to saving money with healthy meals!</p>
      <div className='form-group'>
        <label htmlFor='login-email'>Email</label>
        <input
          type='email'
          placeholder='email@address.com'
          id='login-email'
          value = {emailString}
          name = 'email'
          onChange = {handleInput}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='login-password'>Password</label>
        <input
          type='password'
          id='login-password'
          value={passwordString}
          name = 'password'
          onChange = {handleInput}
        />
      </div>
  </div>

export default LoginForm;