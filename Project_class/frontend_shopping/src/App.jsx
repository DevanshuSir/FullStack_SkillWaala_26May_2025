import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
<<<<<<< HEAD
import Query from './pages/Query'
import Login from './components/Login'
import Reg from './components/Reg'
import Cart from './pages/Cart'
=======
import Login from './components/Login'
>>>>>>> 43333e54a99acc15637f21ff51eac5075be3fa47

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
<<<<<<< HEAD
        <Route path='/query' element={<Query/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/reg' element={<Reg/>}/>
        <Route path='/cart' element={<Cart/>}/>
=======
        <Route path='/login' element={<Login/>}/>
>>>>>>> 43333e54a99acc15637f21ff51eac5075be3fa47
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
