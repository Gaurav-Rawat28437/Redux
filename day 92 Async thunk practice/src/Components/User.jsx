import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { UsergetDataThunk } from '../Utils/UserSlice'

function User() {
  const data = useSelector((Store) => Store.user.data)
  const dispatch = useDispatch()

  useEffect(() => {
     if(data.length > 0)
    {
      return 
    }
    dispatch(UsergetDataThunk())
  }, [])

  return (
    <div className="p-6">

      {data.length === 0 ? (
        <h1 className="text-center text-xl font-semibold text-gray-500">
          data is not found
        </h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {item.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-1">
                    📞 {item.phone}
                  </p>

                  <p className="text-gray-600 text-sm mb-3">
                    📧 {item.email}
                  </p>
                </div>

                <button className="mt-3 bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-500 transition font-medium">
                  ⭐ Add to Favorite
                </button>
              </div>
            )
          })}

        </div>
      )}
    </div>
  )
}

export default User