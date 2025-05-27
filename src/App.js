import React from 'react'
import { useState,useEffect } from 'react'

export default function App() {
  const[data,setdata] = useState([]);
  useEffect(()=>
  {
    fetch(fetch('https://dummyjson.com/products').then(res => res.json ()).then(json => setdata(json.products)))
  },[])
  return (
    <>
      {
        data.map((item)=>
        (
          <h1 key={item.id}>{item.title}</h1>
        ))
      }
    </>
  )
}
