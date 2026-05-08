import React from 'react'

function NewTask({data,refresh,setData}) {
  function handleAccept() {
    const employees=JSON.parse(localStorage.getItem('employees'))
    const emp=data.assignedTo;
    const empObj=employees.find(empl=>empl.name==data.assignedTo);
    const task=empObj.tasks.find(t=>t.title==data.title);
    task.active=true;
    task.new=false;
    localStorage.setItem('employees',JSON.stringify(employees));
    const updatedEmp=employees.find(emp=>emp.name==data.assignedTo);
    setData(updatedEmp);
    refresh(prev=>!prev);
  }
  return (
    <div className="flex-shrink-0 ml-1 w-[250px] bg-gray-500 rounded-xl hover:scale-102 transition-all duration-300 ">
        <div>
          <h3 className="bg-red-600 font-bold rounded-t-xl p-1">{data.category}</h3>  
        </div>
        <div className="m-2">
          <p className="font-bold">{data.date}</p>
          <h2 className="text-2xl font-bold">{data.title}</h2>
          <p className="text-sm mt-3">{data.description}</p>
        <div className='flex justify-center mt-6 gap-5'>
          <button onClick={handleAccept} className='bg-green-500 h-12 rounded py-1 px-2 text-sm w-[100%] cursor-pointer '>Accept Task</button>
        </div>
        </div>
      </div>
  )
}

export default NewTask 