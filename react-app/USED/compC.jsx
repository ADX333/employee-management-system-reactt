import CompD from './compD.jsx';

import React, {useState, useEffect} from 'react';
export default function CompC(){
  return(
    <div className="box">
      <h1>Component C</h1>
      <CompD></CompD>
    </div>
  )
}