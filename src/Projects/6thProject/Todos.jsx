import React from 'react'
import Todo from './todo'

function Todos({ todos,toggleCompleted, removeTodo }) {
  return (
    <div>
        {/* Here all tha todos are taken as props from TodoApp and using map function to iterate through all the todos and passing todos as spread to Todo component */}
      {
        todos.map((todo)=> {
            return (
                <Todo {...todo} key={todo.id} toggleCompleted={toggleCompleted} removeTodo={removeTodo}/>
            )
        })
      }
    </div>
  )
}

export default Todos
