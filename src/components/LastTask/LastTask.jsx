import React from 'react'
import { Task } from '../Task/Task'
import {useRef ,useState } from 'react'

let counter=0

export const LastTask = () => {
  const myReference = useRef('')
  const [tasks, setTasks] = useState ([])

  const CreationTask=()=>{
    let response=myReference.current.value
    console.log(response);
    counter++
    const NewTask={
      _id: counter,
      takss: response
    }
  
     setTasks([...tasks, NewTask])
  }

  return (
<>
    
   <div className='notes'>
   <input ref={myReference} type="text" placeholder='ingresa una tarea' />
   <button onClick={CreationTask}>crear tarea</button>
   </div>
   <div className="ContentTaks">
        {
            tasks.map(TAks=>(
            <Task 
            key={TAks._id}
            content={TAks.takss}/>
          ))
        }
      </div>
   </>

  )
}
