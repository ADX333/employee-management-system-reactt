import React, {useState,useRef, useEffect} from 'react';

export default function Reff(){

  const inputRef=useRef(null);
  const inputRef2=useRef(null);
  const inputRef3=useRef(null);

  useEffect(()=>{
    console.log('Component Rendered')
  });

  function handleClick(){
  inputRef.current.focus();
  inputRef.current.style.backgroundColor = "orange";
  }
  function handleClick2(){
  inputRef2.current.focus();
  inputRef2.current.style.backgroundColor = "white";
  }
  function handleClick3(){
  inputRef3.current.focus();
  inputRef3.current.style.backgroundColor = "Green";
  }

  return(
    <>
    <button onClick={handleClick}>CLick Me 1</button>
    <input ref={inputRef}></input>

    <button onClick={handleClick2}>CLick Me 2</button>
    <input ref={inputRef2}></input>

    <button onClick={handleClick3}>CLick Me 3</button>
    <input ref={inputRef3}></input>
    </>
  )
}