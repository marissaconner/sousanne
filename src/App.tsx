import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Authenticate from './pages/Authenticate'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Routes>
      <Route
        path='/login'
        element={<Authenticate />}
      />
      <Route
        path ='/home'
        element={<Home />}
      />
      <Route
        path='*'
        element={<NotFound />}
      />
    </Routes>
  )
}

export default App;