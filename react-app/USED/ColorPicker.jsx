import React, {useState} from 'react';
export default function ColorPicker(){
  
  const [color,setColor]=useState("#FFFFFF");

  function handleColorChange(event){
    setColor(event.target.value);
  }

  return(
    <div className="color-picker-container">
      <h1 >ColorPicker&trade;</h1>
      <div className="color-display" style={{backgroundColor:color}}>
        <p>Selected Color: {color}</p>
        <label>Select a Color:</label>
        <input type="color" value={color} onChange={handleColorChange}/>
      </div>
    </div>
  )
}