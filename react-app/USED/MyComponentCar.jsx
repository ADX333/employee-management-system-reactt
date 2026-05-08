import React,{useState} from 'react';



export default function MyComponent(){
  const [car, setCar]=useState({year:2022,
                                make:"Mahindra",
                                model:"Scorpio Classic"
  });                             

  function updateYear(event){
    setCar(c=>({...c, year: event.target.value}))
}
  function updateMake(event){
    setCar(c=>({...c, make:event.target.value}))
  }
  function updateModel(event){
    setCar(c=>({...c, model:event.target.value}))
  }

  return(
    <div>
      <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
      <input type="number" value={car.year} onChange={updateYear}/><br></br>
      <input type="text" value={car.make} onChange={updateMake}/><br></br>
      <input type="text" value={car.model} onChange={updateModel} /><br></br>
    </div>
  )
}