import React from 'react'
import './App.css'
import LoginPage from './components/core/LoginPage'
import NavBar from './components/utilities/NavBar'
const App = () => {
  return (
    <div className="main__container">
      <NavBar/>
      <LoginPage/>
    </div>
  )
}

export default App
//bg-rgb(67,78,92)
//box-rgb(78,87,100)
//green-rgb(69,169,104)