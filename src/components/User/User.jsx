import React from 'react'
import { useParams } from 'react-router-dom'       

function User() {
    const {userId} =useParams()    //with the help of useParams we get the access of userId
  return (
    <div className='bg-gray-600 text-white p-4'>User: {userId}</div>
  )
}

export default User