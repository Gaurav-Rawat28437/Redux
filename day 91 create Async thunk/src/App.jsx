import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import User from './Components/User'
import { getUserData } from './Utils/Redux/UserSlice'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Harry from './Components/Harry'
import Product from './Components/Product'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserData())
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="flex justify-between items-center bg-black text-white px-6 py-4 shadow-md">
        <h1 className="text-xl font-bold">LOGO</h1>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/About" className="hover:text-gray-200">About</Link>
          <Link to="/User" className="hover:text-gray-200">User</Link>
          <Link to="/Harry" className="hover:text-gray-200">Harry</Link>
          <Link to="/Product" className="hover:text-gray-200">Product</Link>
        </div>
      </nav>

      {/* Page Content */}
      <div className="p-6">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/User' element={<User />} />
          <Route path='/Harry' element={<Harry />} />
          <Route path='/Product' element={<Product />} />
        </Routes>
      </div>

    </div>
  )
}

export default App