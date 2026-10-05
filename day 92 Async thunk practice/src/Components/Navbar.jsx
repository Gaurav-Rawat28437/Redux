import React from "react";
import {NavLink} from "react-router-dom"

function Navbar(){

    return (
       <nav className="flex justify-between items-center px-10 py-4 bg-black text-white">
  <h3 className="font-bold text-lg">LOGO</h3>

  <div className="flex gap-6">
    <NavLink
      to="/home"
      className={({ isActive }) =>
        isActive ? "text-yellow-400 underline" : "text-white"
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/user"
      className={({ isActive }) =>
        isActive ? "text-yellow-400 underline" : "text-white"
      }
    >
      User
    </NavLink>

    <NavLink
      to="/product"
      className={({ isActive }) =>
        isActive ? "text-yellow-400 underline" : "text-white"
      }
    >
      Product
    </NavLink>

    <NavLink
      to="/cart"
      className={({ isActive }) =>
        isActive ? "text-yellow-400 underline" : "text-white"
      }
    >
      Cart
    </NavLink>
  </div>
</nav>
    )
}

export default Navbar