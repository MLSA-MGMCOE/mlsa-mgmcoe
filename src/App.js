import React from 'react'
import "./App.css"
import Header from './components/Header'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    // react router dom
    <Router>
      <Header />
      
    </Router>
  )
}

export default App