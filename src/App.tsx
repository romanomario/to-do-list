import './App.css'
import Home from './home'
import NavBar from './NavBar'
import Create from './Create'
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <div className="App">
      <NavBar />
      <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Suspense>
  </Router>
    </div>
  )
}

export default App
