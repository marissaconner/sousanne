import React, { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { Button, TextInput } from '@marissaconner/sousanne-component-library'

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
    e.stopPropagation()
    //e.stopImmediatePropagation()
    console.error("Log in is running.")
    axios({
      method: 'post',
      url: '/api/user/login',
      data: { email, password }
    })
      .then((res) => {
        console.error('I done did it')
        setLoggedIn(true)
        // res.data  {"sousanne":"...","sousanneId":20}
        props.onLogIn(res.data)
      })
      .catch((err) => {
        console.error(err)
        setEmailError("That email or password doesn't look right.")
      })
  }

  const onSignup = function (e: React.FormEvent) {
    e.preventDefault()
    console.log("signup is running")
    console.log(email)
    console.log(password)
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

  const emailStatus = function () {
    if (!validEmail) {
      return 'error'
    }
    return 'default'
  }

  return (
    <div>
      { loggedIn ? <Navigate to="/home" /> : '' }
      <form noValidate>
        <fieldset>
          <legend>Sign Up</legend>
          <TextInput
            placeholderText="email@domain.com"
            labelText="Email"
            id="signup_email"
            onChange={(e) => {onInputEmail(e)}}
            status={emailStatus()}
            errorText={emailError}
          />
          <TextInput
            labelText="Password"
            id="signup_password"
            onChange={(e) => {onInputPassword(e)}}
          />
        </fieldset>
        <Button
          onClick={(e) => {onSignup(e)}}
        >
          Sign Up
        </Button>
        <Button
          type="submit"
          onClick={(e) => {logIn(e)}}
        >
          Log In
        </Button>
      </form>
    </div>
  )
}

export default Authenticate;