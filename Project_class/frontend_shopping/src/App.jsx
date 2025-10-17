import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Query from './pages/Query'
import Cart from './pages/Cart'
import Login from './components/Login'
import Reg from './components/Reg'
import AdminDashboard from './admin/AdminDashboard'
import AdminProducts from './admin/AdminProducts'
import AddProducts from './admin/AddProducts'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/query' element={<Query/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/reg' element={<Reg/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/admin/adminproduct' element={<AdminProducts/>}/>
        <Route path='/admin/add-products' element={<AddProducts/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
