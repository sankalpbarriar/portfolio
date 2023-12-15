import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'        
//Api handling to get github followers
function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //  fetch('https://api.github.com/users/sankalpbarriar')
    //  .then(response=> response.json())
    //  .then(data=>{
    //     console.log(data);
    //     setData(data)
    //  })
    // },[])

  return (
    
    <div class="flex items-center gap-4 p-3 m-4 bg-gray-300">
    <img class="w-60 h-60 border-2 border-white rounded-full dark:border-gray-800" src={data.avatar_url} alt=""/>
    <div class="font-medium dark:text-white">
        <div className='text-3xl sm:font-sans sm:font-bold '>{data.name}</div>
        <div>followers:{data.followers}</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">username: {data.login}</div>
        
    </div>
</div>    
    
  )
}

export default Github

export const githubInfoLoader= async ()=>{
    const response= await fetch('https://api.github.com/users/sankalpbarriar')
    return response.json()
}