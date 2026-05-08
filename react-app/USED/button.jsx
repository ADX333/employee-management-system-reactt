export default function Button(){

  function handleClick(event){
    event.target.textContent='Ouch!';
  } 
  return(
    <button onClick={(event)=>{handleClick(event)}}>Click here Nigga</button>
  )
}