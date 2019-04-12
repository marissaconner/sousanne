import React from 'react';

const SignupForm = ({ emailString, passwordString, handleInput, togglePassword, hidePassword }) => 
 <div>
       <div className='form-group'>
        <label htmlFor='signup-email'>Email</label>
        <input
          type='email'
          placeholder='email@address.com'
          id='signup-email'
          value = {emailString}
          name = 'email'
          onChange = {handleInput}
        />
      </div>

      <div className='form-group pinned-content'>
        <label htmlFor='signup-password'>Password</label>
        <span 
          className='pin pin-right bold primary cursor-pointer' 
          onClick={togglePassword}>
            {hidePassword ? 'Show' : 'Hide'}
        </span>
        <input 
          type={hidePassword ? 'password' : 'text' }
          value={passwordString}
          placeholder="The longer, the safer!"
          id='signup-password'
          name='password'
          onChange = {handleInput}
        />
        <p className="helptext">8 characters or more</p>
      </div>
  </div>

export default SignupForm;