import React, {useState,useEffect} from 'react';


export default function Login({handleLogin}) {
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  
  function submitHandler(e){
    e.preventDefault();
    handleLogin(email,password)
    setEmail(""); 
    setPassword("");
  }
  function emailHandler(){
    
  }
  
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-purple-600 p-12'>
        <form onSubmit={(e)=>{submitHandler(e)}} className="flex flex-col items-center justify-center m-4 gap-5">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} className='border-2 border-purple-600 py-3 px-5 rounded-2xl' type="email" placeholder="Enter your email" required></input>
          <input value={password} onChange={(event)=>setPassword(event.target.value)} className="border-2 border-purple-600 py-3 px-5 rounded-2xl"type="password" placeholder="Password" required></input> 
          <button className=" bg-black rounded-4xl px-25 py-3 text-black mt-3.5 hover:shadow-[0_0_15px_rgba(170,59,255,0.5)] transform hover:scale-110 transition-all duration-300">Continue</button>
        </form>
      </div>
    </div>
  )
}
