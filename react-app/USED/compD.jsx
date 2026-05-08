import React, {useState, useContext} from 'react';
import {UserContext} from './compA.jsx';

export default function CompD(){
  const user=useContext(UserContext);
  return(
    <div className="box">
      <h1>Component D</h1>
      <h2>{`Why are you still here ${user}`}</h2>
    </div>
  )
}