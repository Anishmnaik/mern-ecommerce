import React from 'react'
import {Route,Routes} from "react-router"
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}  />
        <Route path="/login" element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
    </div>
  )
}

export default App

