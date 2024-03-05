import {useRef ,useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LastTask } from './components/LastTask/LastTask'
import { Task } from './components/Task/Task'

function App() {
  const [count, setCount] = useState(0)
  const myReference= useRef('')
  const Task1=[
    {
    _id:1,
    description:"cualquier cosa",
  },
 
]
  return (
   <>
  <LastTask/>
   <div className='array'>
      {
        Task1.map(TAsks=>(
          <Task
          key={TAsks._id}
          content={TAsks.description}
          />
        ))
      }
   </div>
  
   </>
  )
}

export default App
