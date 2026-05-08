import React, {useState} from 'react';
export default function ToDoList(){
  const [tasks,setTasks]=useState([]);
  const [newTask,setNewTask]=useState("");

  function handleInputChange(event){
    setNewTask(event.target.value);
  }
  function addTask(){
    //const addedTask=document.querySelector('.add-btn').value;
    if(newTask.trim()!==""){
    setTasks(t=>[...t,newTask]);
    setNewTask("");
    }
  }
  function removeTask(index){ 
    const updatedTasks=tasks.filter((_,ind)=>ind!=index);
    setTasks(updatedTasks);
  }
  function moveTaskUp(index){
    if(index>0){
      const updatedTasks=[...tasks];
      [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index){
    if(index<tasks.length-1){
      const updatedTasks=[...tasks];
      [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]]
      setTasks(updatedTasks);
    }
  }
  return(
    <div className="to-do-list">
      <h1>TaskList&trade;</h1>
      <div className="input-section">
      <input type="text" className="add-input" placeholder="Enter new task..." value={newTask} onChange={handleInputChange}></input>
      <button className="add-btn" onClick={addTask}>Add</button>
     </div>
      <ol>
        {tasks.map((task,index)=>
          <li key={index}><span className="text">{task}</span>
          <div className="btn-grp">
          <button className="dlt-btn " onClick={()=>removeTask(index)}>Delete</button>
          <button className="move-btn " onClick={()=>moveTaskUp(index)}>Up</button>
          <button className="move-btn " onClick={()=>moveTaskDown(index)}>Down</button>
          </div>
          </li>
        )}
      </ol>
    </div>
  )
} 