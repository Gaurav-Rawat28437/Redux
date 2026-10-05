import React from 'react'
import { useSelector } from 'react-redux'

function Product() {

  const data = useSelector((Store) => Store.UserData.data.product)

  return (
    <div>

  <h1 className="text-2xl font-bold mb-6 text-center">
        Products
      </h1>
    <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 bg-gray-100'>
      
      {data && data.map((item) => {
        return (
          <div className='bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300 flex flex-col'>
            
            {/* Image */}
            <img 
              className='h-40 w-full object-cover rounded-lg mb-3' 
              src={item.thumbnail} 
              alt={item.title} 
            />

            {/* Title */}
            <h3 className='font-semibold text-lg mb-2 line-clamp-2'>
              {item.title}
            </h3>

            {/* Price + Button */}
            <div className='mt-auto flex items-center justify-between'>
              <p className='text-blue-600 font-bold'>₹ {item.price}</p>

              <button className='bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition'>
                Add
              </button>
            </div>

          </div>
        )
      })}
      
    </main>
    </div>
  )
}

export default Product