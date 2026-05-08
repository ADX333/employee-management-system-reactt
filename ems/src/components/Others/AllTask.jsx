import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

export default function AllTask({data}) {
  const allData= useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 overflow-auto mt-15">
      <div className="bg-purple-800 p-5 m-5 rounded-xl hover:scale-102 transition-all duration-300 flex justify-between font-bold">
        <h2>Name</h2>
        <h3>Active</h3>
        <h4>Completed</h4>
        <h4>New</h4>
        <h4>Failed</h4>
      </div>

      {allData.employees.map((emp,idx)=>{
        const active=emp.tasks.filter(t=>t.active).length;
        const newTasks=emp.tasks.filter(t=>t.new).length;
        const completed=emp.tasks.filter(t=>t.completed).length;
        const failed=emp.tasks.filter(t=>t.failed).length;
        return (
        <div key={idx} className="bg-purple-500 p-5 m-5 rounded-xl hover:scale-102 transition-all duration-300 flex justify-between">
        <h2 className="w-1/120">{emp.name}</h2>
        <h3>{active}</h3>
        <h4>{completed}</h4>
        <h4>{newTasks}</h4>
        <h4>{failed}</h4>
      </div>
      )})}
    </div>
  )
}

