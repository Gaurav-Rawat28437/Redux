import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddItem } from '../Utils/Redux/listSlice'

function Item() {
   const [data,setData]=useState("")
   const store = useSelector((state) => state.Item)
   const dispatch = useDispatch()

  return (
    <div className="flex items-center gap-3 mb-4">
        
        <input 
          onChange={(e)=> setData(e.target.value)}
          value={data}
          type="text" 
          placeholder='Enter item'
          className="flex-1 border border-gray-300 px-4 py-2 rounded-md 
                     outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={()=>{
            if(data!=="")
            {
                dispatch(AddItem(data))
                setData("")
            }
          }}
          className="bg-blue-500 text-white px-5 py-2 rounded-md 
                     hover:bg-blue-600 transition"
        >
         Add
        </button>

    </div>
  )
}

export default Item