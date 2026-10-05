import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeToCart } from '../Utils/CartSlice'

function Cart() {
  const [total, setTotal] = useState(0)
  const data = useSelector((Store) => Store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    let count = 0
    for (let product of data) {
      count += product.quantity * product.price
    }
    setTotal(count.toFixed(2))
  }, [data])

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Total */}
      <div className="max-w-4xl mx-auto bg-white p-5 rounded-xl shadow mb-6 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Total Price</h1>
        <h1 className="text-2xl font-bold text-green-600">₹ {total}</h1>
      </div>

      {/* Cart Items */}
      <div className="max-w-4xl mx-auto space-y-4">

        {data.length === 0 ? (
          <h1 className="text-center text-2xl font-semibold">No items in cart</h1>
        ) : (
          data.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >

              {/* Left Section */}
              <div className="flex items-center gap-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />

                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-500">₹ {item.price}</p>

                  {/* Quantity */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      +
                    </button>

                    <p>{item.quantity}</p>

                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() => dispatch(removeToCart(item))}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="text-right">
                <p className="text-gray-500">Qty: {item.quantity}</p>
                <h3 className="font-bold">
                  ₹ {(item.quantity * item.price).toFixed(2)}
                </h3>
              </div>

            </div>
          ))
        )}

      </div>
    </div>
  )
}

export default Cart