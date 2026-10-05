import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Product from './Components/Product'
import User from './Components/User'

function App() {
  return (
    <div>

      <Navbar />



      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/user' element={<User />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/cart' element={<Cart />}></Route>

      </Routes>
    </div>
  )
}

export default App
