import React from 'react';

const LoginForm = ({ emailString, passwordString, handleInput }) => 
 <div>
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