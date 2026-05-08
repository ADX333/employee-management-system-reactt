import React, {useState,useRef, useEffect} from 'react';

export default function Stopwatch(){
  const [isRunning, setIsRunning]=useState(false);
  const [time,setTime]=useState(0);

  const intervalIdRef=useRef(null);
  const startTimeRef= useRef(0);

  useEffect(()=>{
    if(isRunning){
      intervalIdRef.current=setInterval(()=>{
        setTime(Date.now()-startTimeRef.current);
      },10);
    }
    return ()=>{
      clearInterval(intervalIdRef.current);
    }
  }, [isRunning])

  function start(){
    setIsRunning(true);
    startTimeRef.current= Date.now() - time;
  }
  function stopp(){
    setIsRunning(false);
  }
  function reset(){
    setTime(0);
    setIsRunning(false);
  }
  function formatTime(){
    let hours= Math.floor(time /(1000*60*60));
    let minutes= Math.floor(time /(1000*60)%60);
    let seconds= Math.floor(time /(1000)%60);
    let milliseconds= Math.floor((time % 1000)/10);
    return `${minutes}:${seconds}:${milliseconds}`
  }
  return(
    <div className="stop">
      <div className="display">{formatTime()}</div>
      <div className="buttons">
      <button onClick={start} style={{backgroundColor:"green"}}>Start</button>
      <button onClick={stopp} style={{backgroundColor:"red"}}>Stop</button>
      <button onClick={reset} style={{backgroundColor:"blue"}}>Reset</button>
      </div>
    </div>
  )
}