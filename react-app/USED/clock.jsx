import React, {useState, useEffect} from 'react';

export default function Clock(){
  const [time,setTime]=useState(new Date());
  useEffect(()=>{
    const intervalId=setInterval(()=>{
      setTime(new Date());
    }, 1000);
    
    return ()=>{
      clearInterval(intervalId);
    }
  },[])

  function formatTime(){
    let hours=time.getHours();
    const minutes=time.getMinutes();
    const secs=time.getSeconds();
    const meridiem= hours >=12 ? "PM" : "AM";
    hours= hours %12 || 12;
    return `${hours}:${minutes}:${secs} ${meridiem}`
  }

  

  return(
  <div className="clock-container">
    <div className="clock">
      <h1>{formatTime()}</h1>
    </div>
  </div>  
  )
}