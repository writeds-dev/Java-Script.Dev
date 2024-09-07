import React from 'react'
import Input from './Components/Input'
import { useState } from 'react'
import Todoform from './Components/Todoform'

const App = () => {
  const[todo,setTodo]=useState([
    {id:1,title:"guitar",task:true},
    {id:2,title:"gyming",task:false},
    {id:3,title:"learn coding",task:true},
  ])
  return (
    <div>
      <h1 className='bg-green-300 h-[10vh] text-center font-serif text-2xl p-4'>ToDo-LiSt</h1>
      <Input/>
<Todoform todo={todo}/>
      
    </div>
  )
}

export default App
