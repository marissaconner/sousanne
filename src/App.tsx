import React, { useState } from 'react'

function App() {

  const validateEmail = function () {
    const regex = /^([\w.%+-]+)@([\w-]+).([\w]{2,})$/i
    const isValid = email.match(regex) !== null
    setValidEmail(isValid)
    // TODO: Check that the email doesn't already exist.
  }

  const validatePassword = function () {
    setValidPassword(password.length >= 7)
  }

  const validateForm = function () {
    validateEmail()
    validatePassword()
    setValidForm(validEmail && validPassword)
  }

  const onInputEmail = function (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setEmail(e.target.value)
  }

  const onInputPassword = function (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setPassword(e.target.value)
  }

  const onSubmit = function (e: React.FormEvent) {
    e.preventDefault()
    setSubmittingForm(true)
    validateForm()
    if (validForm) {
      console.log("Beam that shit up")
    }
    setSubmittingForm(false)
  }

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [validEmail, setValidEmail] = useState<boolean>(false)
  const [validPassword, setValidPassword] = useState<boolean>(false)
  const [validForm, setValidForm] = useState<boolean>(false)
  const [submittingForm, setSubmittingForm] = useState<boolean>(false)

  return (
    <div>
      <form noValidate onSubmit={(e) => {onSubmit(e)}}>
        <fieldset>
          <legend>Sign Up</legend>
          <label
            htmlFor="signup_email"
          >
            Email
          </label>
          <input
            value={email}
            id="signup_email"
            type="email"
            onChange={(e) => {onInputEmail(e)}}
          >
          </input>

          <label
            htmlFor="signup_password"
          >
            Password
          </label>
          <input
            value={password}
            id="signup_password"
            type="password"
            onChange={(e) => {onInputPassword(e)}}
          >
          </input>
        </fieldset>
        <input type="submit" value="Sign Up"/>
      </form>
    </div>
  )
}

export default App;