import CompC from './compC.jsx';
import {UserContext} from './compA.jsx';

import React, {useState, useContext} from 'react';
export default function CompB(){
  const user=useContext(UserContext);
  return(
    <div className="box">
      <h1>Component B</h1>
      <h2>{`Bye ${user}`}</h2>
      <CompC></CompC>
    </div>
  )
} 