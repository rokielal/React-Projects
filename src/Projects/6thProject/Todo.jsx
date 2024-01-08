import React from 'react'

function Todo( { id, title, completed, toggleCompleted, removeTodo }) {
    // here receiving the props and destructering it and rendering in the UI
  return (
    <div style={{
        border:"2px solid black",
        padding: "1rem",
        margin: "1rem"
    }}>
        
        <p>Title: {title}</p>
        {/* <p>Completed: {completed ? "True" : "False"}</p> */}
        <input type="checkbox" checked={completed} onChange={()=>{toggleCompleted(id)}}/>
        <p>ID: {id}</p>
        <button onClick={()=>{removeTodo(id)}}>Remove</button>
    </div>
  )
}

export default Todo