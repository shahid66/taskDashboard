import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { SelectByStatus } from '../../API/APIRequest'
import TaskCard from '../TaskCard/TaskCard'

const Complete = () => {
  useEffect(()=>{
    SelectByStatus("Completed")
  },[])
  const CompleteData=useSelector((state)=>state.task.Completed)
  return (
    <div className='dashboard'>
    <div className="dashboard__wrapper">
    <div className="dashboard__search__task">
          <div className="task__status__title">
            <h2>Complete Task</h2>
          </div>
          <div className="task__search__bar">
          <input type="text" placeholder='search or type'/>
          <span><i class="ri-search-line"></i></span>
          </div>
        </div>
    <div className="todo__task-wrapper">
      {
       CompleteData.map((item,i)=>(
        <TaskCard key={i} item={item}/>
      ))
      }


</div>
    </div>
  </div>
  )
}

export default Complete