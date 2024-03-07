import React from 'react'
import {useRef ,useState } from 'react'



export const LastTask = () => {
  const myReference = useRef('')
  const [tasks, setTasks] = useState ([])

  const CreationTaks=()=>{
    let response=myReference.current.value
    console.log(response);
    counter++
    const NewTaks={
      _id: counter,
      takss: response
    }
  
     setTakks([...tasks, NewTaks])
  }

  return (
<>
    
   <div className='notes'>
   <input ref={myReference} type="text" placeholder='ingresa una tarea' />
   <button onClick={CreationTaks}>crear tarea</button>
   </div>
   <div className="ContentTaks">
        {
            tasks.map(TAks=>(
            <Taks 
            key={TAks._id}
            component={TAks.takss}/>
          ))
        }
      </div>
   </>

  )
}
