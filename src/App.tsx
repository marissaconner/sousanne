import React, { useState } from 'react'

function App() {

  return (
    <div>
      <form>
        <fieldset>
          <legend>Sign Up</legend>
          <label
            htmlFor="signup_email"
          >
            Email
          </label>
          <input
            id="signup_email"
            type="email"
          >
          </input>

          <label
            htmlFor="signup_password"
          >
            Password
          </label>
          <input
            id="signup_password"
            type="password"
          >
          </input>
        </fieldset>

      </form>
      <button>
        Sign Up
      </button>
    </div>
  )
}

export default App;