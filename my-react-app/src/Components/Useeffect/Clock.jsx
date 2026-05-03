import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [time, setTime]= useState(new Date().toLocaleTimeString("en-US", {hour12:false}))

useEffect(()=>{

    const timer=setInterval(()=>{
    setTime(new Date().toLocaleTimeString("en-US", {hour12:false}))  
    },1000 )

    return()=>clearInterval(timer);
    

},[])
  
  return (
    <div>
      <h1>Clock</h1>
      <h2>{time}</h2>
    </div>
  )
}

export default Clock
