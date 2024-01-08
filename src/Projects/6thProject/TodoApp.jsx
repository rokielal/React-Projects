import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos'

function TodoApp() {

  const [todos, setTodos] = useState([
    // {id:1, title:"Learn Guiter", completed: false},
    // {id:2, title:"Learn HTML", completed: true},
  ]);

  // this addTodo function is taking a newTodo and returning all the previous Todo already present adding newTodo to it and then passing this function to TodoForm component so that 
  const addTodo =(newTodo) => {
      setTodos(prevState => [...prevState, newTodo])
  }

  const removeTodo = (id) =>{
    setTodos((prevState)=> prevState.filter(todo => todo.id !== id))
  }
  // here created a toggle function for checkbox changing the status of completed
  const toggleCompleted = (id) =>{
    setTodos((prevState) => {
      return prevState.map((todo)=>{
          if(todo.id === id){
            return {...todo, completed:!todo.completed};
          }
          else{
            return todo;
          }
      })
    })
  }

  
  return (
    <div>
      <h1 className='main-title'>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <Todos todos={todos} toggleCompleted={toggleCompleted} removeTodo={removeTodo}/>
    </div>
  )
}

export default TodoApp
