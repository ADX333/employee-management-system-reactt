import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

export default function TaskList({data,refresh,setData}){
  return (
    <div id="tasklist" className="rounded-t-2xl flex items-center justify-start gap-5 py-5 w-full h-[65%] mt-10 overflow-x-auto px-1 items-stretch ">
      {data.tasks.map((task)=>{
        if(task.active) return <AcceptTask setData={setData} refresh={refresh} key={task.title} data={task}></AcceptTask>
        if(task.new) return <NewTask key={task.title} data={task} refresh={refresh} setData={setData}></NewTask>
        if(task.completed) return <CompleteTask key={task.title} data={task} refresh={refresh}></CompleteTask>
        if(task.failed) return <FailedTask key={task.title} data={task} refresh={refresh}></FailedTask>
      })}
    </div>
  )
}

