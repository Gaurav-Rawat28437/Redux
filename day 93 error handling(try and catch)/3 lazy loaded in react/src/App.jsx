import React ,{lazy, Suspense} from 'react'
import { Routes,Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
const LazyLoadedAbout=lazy(()=>import("./Components/About"))
const LazyLoadedProfile=lazy(()=>import("./Components/Profile"))
const LazyLoadedHome=lazy(()=>import("./Components/Home"))

export default function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<LazyLoadedHome />}></Route>
        <Route path='/Home' element={<LazyLoadedHome />}></Route>
        <Route path='/About' element={<LazyLoadedAbout />}></Route>
        <Route path='/Profile' element={
          <Suspense fallback={<h1>Loading profile component...</h1>}> 
              <LazyLoadedProfile />
          </Suspense>
        }></Route>

      </Routes>
    </div>
  )
}
