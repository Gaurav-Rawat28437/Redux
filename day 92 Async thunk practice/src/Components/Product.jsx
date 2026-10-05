import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PrductgetDataThunk } from '../Utils/ProductSlice'
import { addToCart } from '../Utils/CartSlice'

function Product() {

    const data = useSelector((Store) => Store.product.data)
  const dispatch = useDispatch()

  useEffect(() => {
     if(data.length > 0)
    {
      return
    }
    dispatch(PrductgetDataThunk())
  }, [])

  return (
    <div>

  <h1 className="text-2xl font-bold mb-6 text-center">
        Products
      </h1>
    <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 bg-gray-100'>
      
      {data && data.map((item,index) => {
        return (
          <div key={index} className='bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300 flex flex-col'>
            
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

              <button
              onClick={()=>{
                dispatch(addToCart(item))
              }} 
              className='bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition'>
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
