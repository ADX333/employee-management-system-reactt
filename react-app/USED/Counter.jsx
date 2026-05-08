import React, {useState} from 'react';
export default function Counter(){
  const [count, setCount]=useState(0);
  function increment(){
    setCount(c=>c+1);
  }
  function decrement(){
    setCount(c=>c-1);
  }
  const reset=()=>{
    setCount(0);
  }

  return(
    <><div>
    <h2>This is a counter</h2>
    <button style={{backgroundColor:'GreenYellow'}}className="inc" onClick={increment}>Increase</button>
     <button className="res" onClick={reset}>Reset</button>
    <button style={{backgroundColor:'Red'}} className="dec" onClick={decrement}>Decrease</button>
    </div>
    <div><p>Current count is: <h4>{count}</h4></p></div>
    </>
  )
}