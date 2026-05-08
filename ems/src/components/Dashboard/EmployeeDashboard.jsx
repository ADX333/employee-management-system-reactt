import React, {useState} from 'react';
import Header from 
'../Others/Header.jsx'
import TaskTab from '../Others/TaskTab.jsx';
import TaskList from '../TaskList/TaskList.jsx';

export default function EmployeeDashboard ({data, changeUser, refresh, setData}) {
  return (
    <div className="p-8 bg-[#232323] shadow-[0_0_15px_rgba(170,59,255,0.5)] mx-40 my-20 h-min-[80%] ">
      <Header data={data} changeUser={changeUser}></Header>
      <TaskTab data={data}></TaskTab>
      <TaskList data={data} refresh={refresh} setData={setData}></TaskList>
    </div>
  )
}

