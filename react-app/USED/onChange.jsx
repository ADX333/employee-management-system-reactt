import React, {useState} from 'react';
 
export default function Change(){
  const [name,setName]=useState("Guest");
  const [quant,setQuant]=useState(0);
  const [cmnt,setCmnt]=useState("");
  const [payment,setPayment]=useState();
  const [shipping, setShipping]=useState("Standard Delivery");

  function handleNameChange(event){
    setName(event.target.value);
  }
  function handleQuantity(event){
    setQuant(event.target.value);
  }
  function Comment(event){
    setCmnt(event.target.value);
  }
  function paymentType(event){
    setPayment(event.target.value);
  }
  function handleShippingChange(event){
    setShipping(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange}></input>
      <p>Name: {name}</p>
      <input value={quant} onChange={handleQuantity} type='number'></input>
      <p>Quantity: {quant}</p>
      <p>{name}{quant}</p>
      <input value={cmnt} onChange={Comment} type="text"></input>
      <br></br>
      <select value={payment} onChange={paymentType}>
        <option value={"Credit Card"}>Credit Card</option>
        <option value={"Debit Card"}>Debit Card</option>
        <option value={"UPI"}>UPI</option>
        <option value={"COD"}>Cash on Delivery</option>
      </select>
      <p>Chosen means of Payment : {payment}</p>
        <input type="radio" name="ship" value="Standard Delivery"
        checked={shipping==="Standard Delivery"} onChange={handleShippingChange}/> Standard Delivery
        <input type="radio" name="ship" value="Fast Delivery"
        checked={shipping==="Fast Delivery"} 
        onChange={handleShippingChange}/> Fast Delivery
        <input type="radio" name="ship" value="SuperFast Delivery"
        checked={shipping==="SuperFast Delivery"}
        onChange={handleShippingChange}/> SuperFast Delivery
        <p>Delivery Type: {shipping}</p>
    </div>
  )
}