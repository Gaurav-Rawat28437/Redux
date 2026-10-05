import React from 'react'
import Item from './Components/item'
import Display from './Components/Display'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
  return (
  <>
    <Navbar />

   
      



                  
                  <Routes>
                    
                     <Route path='/Home' element={<Item />}></Route>
                     <Route path='/' element={<Item />}></Route>
                  <Route path='/List' element={<Display />}></Route>
                  </Routes>
                   
     
      

   

  </>
  )
}

export default App