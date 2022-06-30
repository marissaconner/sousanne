import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Authenticate from './pages/Authenticate'
import { Home } from './pages/Home'
import NotFound from './pages/NotFound'
import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:5000'

function App() {
  const existingTokens = localStorage.getItem('tokens')

  const checkAuth = async function () {
    axios({
      method: 'get',
      url: 'http://localhost:5000/api/user/session',
    })
      .then((session) => {
        return true
      })
      .catch((err) => {
        return false
        console.error(existingTokens)
        console.error(err)
      })
  }

  const [auth, setAuth] = useState({
    token: existingTokens,
    loggedIn: Boolean(existingTokens)
  })

  const logIn = function (data: Record<string, unknown>) {
    localStorage.setItem('tokens', JSON.stringify(data))
    setAuth(prevState => ({
      ...prevState,
      token: localStorage.getItem('tokens'),
      loggedIn: true
    }))
  }

  const logOut = function () {
    axios({
      method: 'post',
      url: '/api/user/logout',
    })
      .then(() => {
        localStorage.setItem('tokens', '')
        setAuth(prevState => ({
          ...prevState,
          loggedIn: false
        }))
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<Authenticate onLogIn={logIn} />}
      />
      {auth.loggedIn ?
        <Route
          path ="/home"
          element={<Home onLogOut={logOut} />}
        />
        :
        ""
      }
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  )
}

export default App;