import React, {useState} from 'react';
export default function Component(){
  const [foods,setFoods]=useState(["Pizza", "Pasta", "Frooti"]);

  function addFood(){
    const newFood=document.querySelector(".foodInput").value;
    document.querySelector(".foodInput").value="";
    setFoods(f=>[...f,newFood]);
  }
  function removeFood(index){
     setFoods(foods.filter((element, i) =>i!=index));
  }
  return(
    <div>
      <h2>List of Food</h2>
      <ul style={{cursor:"pointer"}}>
        {foods.map((food,index)=><li key={index} onClick={()=>removeFood(index)}>{food}</li>)}
      </ul>
      <input className="foodInput" type="text" placeholder="Enter food name"></input>
      <button onClick={addFood}>Add food</button>
    </div>
  )
}