import React, { useEffect, useState } from 'react'

function Profile() {
    const [data,setdata]=useState([])
    
    
    useEffect(()=>{
        fetch("https://dummyjson.com/products").then((res)=>res.json()).then((data=>setdata(data.products)))
    },[])
 
    return (
    <div>
      {data.map((item,index)=>{
        return (
            <h3 key={index}>{item.title}</h3>
        )
      })}
    </div>
  )
}

export default Profile
