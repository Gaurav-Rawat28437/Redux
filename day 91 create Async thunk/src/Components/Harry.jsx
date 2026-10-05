import React from 'react'
import { useSelector } from 'react-redux'

function Harry() {

  const data = useSelector((state) => state.UserData.data.harry)

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <h1 className="text-2xl font-bold mb-6 text-center">
        Harry Potter Characters
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {data && data.map((item, index) => (
          <div 
            key={item.name || index} 
            className="bg-white rounded-2xl shadow-md p-4 text-center hover:shadow-lg transition"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover mx-auto rounded-full mb-3"
              />
            )}

            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.gender}</p>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Harry