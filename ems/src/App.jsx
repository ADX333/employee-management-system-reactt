import React, {useContext, useEffect, useState} from 'react';
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import AllTask from "./components/Others/AllTask.jsx";
import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx';
import { AuthContext } from './context/AuthProvider.jsx';
export default function App() {
  const [user, setUser] = useState(null);
  const authData=useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  useEffect(()=>{ 
                    
    const loggedInUser=localStorage.getItem('loggedInUser')
    if(loggedInUser)
    { 
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role);
      setLoggedInUserData(userData.data)
    }
  },[])
/*  useEffect(() => {
    if(authData){
    const loggedInUser=localStorage.getItem("loggedInUser")
    if(loggedInUser){
      setUser(loggedInUser.role)
    }
  }
}, [authData])  
*/  
  const [refresh, setRefresh]=useState(false);

  function handleLogin(email, password){
    if((email=='a1@mail.com' || email=='a2@mail.com' ) && password =='admin123'){
      const admin = authData.admins.find(a => a.email == email)
    setUser('admin');
    setLoggedInUserData(admin)
    localStorage.setItem('loggedInUser', JSON.stringify({role:'admin', data: admin}))
    }
    else if(authData){
      const employee=authData.employees.find((e)=>email== e.email && e.password == password)
      if(employee){
      setUser('employee');
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee' , data:employee}))
      }
    }
    else{
      alert("Invalid Credentials")
    }
  }

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}></Login> : ''}
    
    {user=='admin' ? <AdminDashboard changeUser={setUser} data={loggedInUserData}></AdminDashboard> : (user == 'employee' ? <EmployeeDashboard refresh={setRefresh} changeUser={setUser} setData={setLoggedInUserData} data={loggedInUserData}></EmployeeDashboard> : null)}
    
    </>
  )
}

//e1@mail.com