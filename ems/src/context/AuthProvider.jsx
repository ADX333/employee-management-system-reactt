import React, {useEffect, useState } from 'react'
import { createContext } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext=createContext();

export default function AuthProvider ({children}) {
  //localStorage.clear();
  const [userData, setUserData] = useState(null);
  useEffect(()=>{
    setLocalStorage();
    const {employees,admins}=getLocalStorage();
    setUserData({employees,admins})
  }, [AuthContext])
  return (
    <div>
      <AuthContext.Provider value={userData}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}
 