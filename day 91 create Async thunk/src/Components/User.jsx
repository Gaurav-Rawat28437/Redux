import React from 'react'
import { useSelector } from 'react-redux'

function User() {
  const data = useSelector((Store) => Store.UserData.data.user)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">
        User Data
      </h1>
    <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 bg-gray-100'>
      
      {data && data.map((item) => {
        return (
          <div className='bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300'>
            
            
            <div className='flex items-center gap-4 mb-3'>
              <img 
                className='h-16 w-16 rounded-full object-cover border-2 border-blue-500' 
                src={item.image} 
                alt="" 
              />
              <h3 className='font-semibold text-lg'>
                {item.firstName} {item.lastName}
              </h3>
            </div>

            
            <div className='text-sm text-gray-600 space-y-1'>
              <p><span className='font-medium'>Age:</span> {item.age}</p>
              <p><span className='font-medium'>Gender:</span> {item.gender}</p>
              <p><span className='font-medium'>Phone:</span> {item.phone}</p>
            </div>

            
            <div className='mt-3 border-t pt-2 text-sm'>
              <p><span className='font-medium'>Role:</span> {item.company.title}</p>
              <p><span className='font-medium'>Dept:</span> {item.company.department}</p>
            </div>

          </div>
        )
      })}
    </main>
    </div>
  )
}

export default User