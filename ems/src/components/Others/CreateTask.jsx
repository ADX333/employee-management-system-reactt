import React, {useState} from 'react'

export default function CreateTask() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [assign, setAssign]=useState('');
  const [category, setCategory]=useState('');
  
  //const [newTask, setNewTask] = useState({});
    
  const submitHandler=((e)=>{
    e.preventDefault();
    const newTask={title:title,
      description:desc,
      date:date,
      assignedTo:assign,
      category:category,
      active:false, new:true, updated: false, failed:false}
    //console.log(title, desc, date, assign, category);
    const empData=JSON.parse(localStorage.getItem('employees'));
    empData.forEach((empl)=>{
      if(assign==empl.name){
        
        empl.tasks.push(newTask);
        console.log(empl.tasks);
      }
    })
    localStorage.setItem('employees', JSON.stringify(empData))
    console.log(empData);
    setTitle("");
    setAssign("");                   
    setCategory("");
    setDate("");
    setDesc("");
  })
  return (
    <div><div>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="flex flex-col">
          <h3 className="mt-5 mb-10 text-2xl font-bold">Create Task</h3>
          <p>Task Title</p>
          <input value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Name your task" className="border-amber-50 border-2 rounded p-1 mt-1 mb-6 hover:scale-101 transition-all duration-300 "></input>
          <p>Description</p>
          <input value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Describe your task" className="border-amber-50 border-2 rounded p-1 mt-1 h-30 mb-6 hover:scale-101 transition-all duration-300"></input>
          <p>Date</p>
          <input value={date} onChange={(e)=>{setDate(e.target.value)}} type="Date" className="border-amber-50 border-2 w-53 rounded p-1 mt-1 mb-6 hover:scale-101 transition-all duration-300"></input>
          <p>Assign To</p>
          <select value={assign} onChange={(e)=>{setAssign(e.target.value)}} placeholder="Enter Name" className="border-amber-50 bg-black border-2 rounded p-1 mt-1 mb-6 hover:scale-101 transition-all duration-300">
            <option value="">Select</option>
            <option value="Anshuman">Anshuman</option>
            <option value="Akash">Akash</option>
            <option value="Aman">Aman</option>
            <option value="Dhruv">Dhruv</option>
            <option value="Samyak">Samyak</option>
          </select>
          <p>Category</p>
          <input value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder="Design,Development,etc..." className="border-amber-50 border-2 rounded p-1 mt-1 mb-6 hover:scale-101 transition-all duration-300"></input>
          <button className="bg-black rounded-2xl p-5 hover:scale-103 transition-all duration-300 hover:shadow-[0_0_15px_rgba(170,59,255,0.5)]">Create Task</button>
        </form>
      </div></div>
  )
} 

