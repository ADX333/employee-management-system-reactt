import React, {useState} from 'react';
export default function Cars(){
  const [cars,setCars]=useState([]);
  const [carYear,setCarYear]=useState(new Date().getFullYear());;
  const [carMake,setCarMake]=useState("");
  const [carModel,setCarModel]=useState("");

  function addCar(event){
    const newCar=document.getElementById("addCar").value;
    setCars(c=>({...c,newCar}))
  }
  function removeCar(index){

  }
  function addYear(event){
    const newYear=document.getElementById("addMake").value;
    setCarYear(c=>({...c,newYear}))
  }
  function addMake(event){
    const newMake=document.getElementById("addMake").value;
    setCarMake(c=>({...c,newMake}))
  }
  function addModel(event){
    const newModel=document.getElementById("addModel").value;
    setCarModel(c=>({...c,newModel}))
  }
  return(
    <>
    <h2>This is a page about Cars</h2>
    <ul>
      <li>YOUR CAR: {}</li>
    </ul>
    <input type="text" placeholder="Add a Car" id="addCar"></input>
    <button onClick={addCar}>ADD</button>
    <input type="text" placeholder="Add Company" id="addMake"></input>
    <button onClick={addMake}>ADD</button>
    <input type="number" placeholder="Add Year of Manufacture" id="addModel"></input>
    <button onClick={addYear}>ADD</button>
    </>
  )
  
}