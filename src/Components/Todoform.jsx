import React from 'react'
import TodoList from './TodoList'
const todoForm = ({todo}) => {
  return (
    <div>
      {todo.map((todo)=>{
        return <TodoList {...todo}/>
      })}
      
    </div>
  )
}

export default todoForm
