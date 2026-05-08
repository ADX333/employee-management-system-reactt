import React, {useState,useEffect} from 'react';

export default function UseEff(){
  const [count,setCount]=useState(0);

  useEffect(()=>{
    document.title=`Count: ${count}`
  },[count]);

  function addCnt(){
    setCount(c=>c+1);
  }
  function subCnt(){
    setCount(c=>c-1);
  }

  return(
    <>
    <p>Count:{count}</p>
    <button onClick={addCnt}>Add</button>        <button onClick={subCnt}>Subtract</button>

    </>
  )
} 