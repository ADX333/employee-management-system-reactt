export default function UserGreeting({isLoggedIn=false, username}){
  
  if(isLoggedIn)
    return(
    <h2 style={{color:'green'}}>
      Welcome {username}
    </h2>
    )
  else{
    return(
    <h2 style={{color:'red'}}>
      Please Login/Signup to continue
    </h2>
    ) 
  }
}
