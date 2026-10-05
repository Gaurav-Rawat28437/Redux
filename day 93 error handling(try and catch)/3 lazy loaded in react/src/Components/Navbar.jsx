import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex bg-blue-600 text-white justify-between items-center py-5 px-10'>
        <h3>LOGO</h3>

        <div className='flex gap-5'>
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Profile">Profile</Link>

        </div>
    </nav>
  )
}

export default Navbar
