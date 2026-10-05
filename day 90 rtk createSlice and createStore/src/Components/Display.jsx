import React from 'react'
import { useSelector } from 'react-redux'

function Display() {
    const store = useSelector((state) => state.Item)

  return (
    <div className="space-y-2">
      {store && store.map((item, index) => (
        <div key={index} className="bg-gray-200 px-3 py-2 rounded">
          {item}
        </div>
      ))}
    </div>
  )
}

export default Display