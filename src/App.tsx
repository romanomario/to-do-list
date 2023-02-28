import './App.css'
import Home from './home'
import Project from './Project'
import NavBar from './NavBar'
import Create from './Create'
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { faB, faCheckSquare, faCoffee, faDatabase, faHouseLaptop, faS, faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faB, faS, faHouseLaptop, faCheckSquare, faCoffee, faDatabase, faWindowMaximize)

function App () {
  return (
    <div className="App">
      <NavBar />
      <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Suspense>
  </Router>
    </div>
  )
}

export default App
