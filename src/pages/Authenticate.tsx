import React, { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom';

interface AuthProps {
  onLogIn: (data: Record<string, unknown>) => void
}

export const Authenticate = (props: AuthProps) => {
  const validateEmail = function () {
    setEmailError("")
    const regex = /^([\w.%+-]+)@([\w-]+).([\w]{2,})$/i
    const isValid = email.match(regex) !== null
    setValidEmail(isValid)
  }

  const validatePassword = function () {
    const isValid = password.length > 6
    setValidPassword(isValid)
  }

  const onInputEmail = function (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setEmail(e.target.value)
    validateEmail()
  }

  const onInputPassword = function (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setPassword(e.target.value)
    validatePassword()
  }

  const logIn = function (e: React.FormEvent) {
    e.preventDefault()
    axios({
      method: 'post',
      url: '/api/user/login',
      data: { email, password }
    })
      .then((res) => {
        setLoggedIn(true)
        // res.data: {"sousanne":"...","sousanneId":20}
        props.onLogIn(res.data)
      })
      .catch((err) => {
        console.error(err)
        setEmailError("That email or password doesn't look right.")
      })
  }

  const onSignup = function (e: React.FormEvent) {
    e.preventDefault()
    axios({
      method: 'post',
      url: '/api/user/new',
      data: { email, password }
    })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.error(err)
        setEmailError("This email address already exists.")
      })
  }

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [validEmail, setValidEmail] = useState<boolean>(false)
  const [validPassword, setValidPassword] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<string>("")
  const [loggedIn, setLoggedIn] = useState<boolean>(false)

  const emailErrorMessages = function () {
    if (emailError) {
      return (
        <p>
          {emailError}
        </p>
      )
    }
  }

  return (
    <div>
      { loggedIn ? <Navigate to="/home" /> : '' }
      <form noValidate>
        <fieldset>
          <legend>Sign Up</legend>
          <label
            htmlFor="signup_email"
          >
            Email
          </label>
          <input
            autoComplete="email"
            value={email}
            id="signup_email"
            type="email"
            onChange={(e) => {onInputEmail(e)}}
          >
          </input>
          {emailErrorMessages()}
          <label
            htmlFor="signup_password"
          >
            Password
          </label>
          <input
            autoComplete="password"
            value={password}
            id="signup_password"
            type="password"
            onChange={(e) => {onInputPassword(e)}}
          >
          </input>
        </fieldset>
        <input type="submit" value="Sign Up" onClick={(e) => {onSignup(e)}} />
        <input type="submit" value="Log In" onClick={(e) => {logIn(e)}} />
      </form>
    </div>
  )
}

export default Authenticate;