import React from 'react'
import Navbar from './pages/Navbar'
import HomePage from './pages/HomePage'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer';
import Cart from './pages/Cart';
import Products from './pages/Products';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product' element={<Products/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
