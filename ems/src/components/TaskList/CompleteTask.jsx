import React from 'react'

function CompleteTask({data}) {
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
          <button className='bg-green-500 h-12 rounded py-1 px-2 text-sm w-[100%] cursor-pointer'>Completed</button>
        </div>
        </div>
      </div>
  )
}

export default CompleteTask