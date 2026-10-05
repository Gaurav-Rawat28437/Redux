import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-3 flex justify-between items-center">
        
        <h3 className="text-lg font-semibold text-gray-800">
          TO-DO
        </h3>

        <div className="flex gap-4">
            <NavLink 
              to="/" 
              className="text-gray-600 hover:text-blue-500"
            >
              Home
            </NavLink>

            <NavLink 
              to="/list" 
              className="text-gray-600 hover:text-blue-500"
            >
              List
            </NavLink>
        </div>

    </nav>
  )
}

export default Navbar