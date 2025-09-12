import React from 'react'
import Navbar from './pages/Navbar'
import HomePage from './pages/HomePage'
import { BrowserRouter , Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
