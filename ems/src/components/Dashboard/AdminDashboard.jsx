import React from 'react'
import Header from '../Others/Header';
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'



export default function AdminDashboard({data, changeUser}) {
  return (
    <div className="h-screen bg-[#232323] shadow-[0_0_15px_rgba(170,59,255,0.5)] overflow-y-auto p-8 m-40">
      <Header changeUser={changeUser} data={data}></Header>
      <CreateTask></CreateTask>
      <AllTask data={data}></AllTask>
    </div>
  )
}
 

