import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Qanda from './components/Qanda';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/testimonial' element={<Qanda/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App