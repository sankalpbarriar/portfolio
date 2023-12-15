import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Leetcode() {
    
    const [data,setData]=useState([])
    useEffect(()=>{
     fetch('https://leetcode.com/api/problems/algorithms/')
     .then(response=> response.json())
     .then(data=>{
        console.log(data);
        setData(data)
     })
    },[])
    

  return (
    
    <h1>leetcode problem solved:{data.followers}</h1>

    
  )
}

export default Leetcode


