import React, {useState} from 'react'
import { setLocalStorage } from '../../utils/localStorage'
const Header = ({data, changeUser}) => {

  /*const [username, setUsername] = useState('');
  if (!data){
    setUsername('admin');
  }
  else {
    setUsername(data.name)
  }
  */
  function handleLogOut(){
    localStorage.setItem('loggedInUser', '');
    changeUser('');
  } 


  return (
    <div>
    <div className="flex align-top items-end justify-between ">
      <h1 className="text-2xl ">Hello👋🏼,<br></br> <span className="text-4xl font-bold">{data.name}</span> 
      </h1>
      <button onClick={handleLogOut} className="bg-red-700 p-2 rounded hover:scale-110 cursor-pointer hover:brightness-110" >Log Out</button>
    </div>
    </div>
  )
}

export default Header