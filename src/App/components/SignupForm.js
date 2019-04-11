import React from 'react';

const SignupForm = () => (
    <form>
      <h2>Create Account</h2>
      <p>Lorem ipsum value reminder text for signing in trusssst in meeee</p>  
      <div className='form-group'>
        <label for='signup-email'>Email</label>
        <input type='text' placeholder='email@address.com' id='signup-email' name='signup-email'/>
      </div>
      <div className='form-group'>
        <label for='signup-password'>Password</label>
        <span class='eyeball'>Show</span>
        <input type='password' id='signup-password' name='signup-password' />
      </div>
      <button>Create Account</button>
      <hr />
      <p>Or sign up with...</p>
      <a href="#">Facebook</a>
      <a href="#">Google</a>
    </form>
  )

export default SignupForm;