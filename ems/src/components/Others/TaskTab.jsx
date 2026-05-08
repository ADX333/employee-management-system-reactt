import React from 'react'

const TaskTab = ({data}) => {
  const active = data.tasks.filter(t => t.active).length
  const newTasks = data.tasks.filter(t => t.new).length
  const completed = data.tasks.filter(t => t.completed).length
  const failed = data.tasks.filter(t => t.failed).length
  return (
    <div className="flex justify-between mt-10 overflow-auto ">
      <div className="bg-blue-300 h-30 w-60 gap-0 p-2 rounded-xs">
        <h2 className="justify-end font-semibold text-6xl gap-2">{newTasks}</h2>
        <h3 className="text-2xl">New Tasks</h3>
      </div>
      <div className="bg-green-400 rounded-xs h-30 w-60 gap-0 p-2">
        <h2 className="justify-end font-semibold text-6xl">{completed}</h2>
        <h3 className="text-2xl">Completed </h3>
      </div>
      <div className="bg-yellow-300 rounded-xs h-30 w-60 gap-0 p-2">
        <h2 className="justify-end font-semibold text-6xl">{active}</h2>
        <h3 className="text-2xl">Accepted </h3>
      </div>
      <div className="bg-red-600 rounded-xs h-30 w-60 gap-0 p-2">
        <h2 className="justify-end font-semibold text-6xl">{failed}</h2>
        <h3 className="text-2xl">Failed </h3>
      </div>
      
    </div>

  )
}

export default TaskTab