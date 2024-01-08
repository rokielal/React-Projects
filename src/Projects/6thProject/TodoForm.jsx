import React, { useState } from 'react'
import {v4 as uuid} from "uuid";

function TodoForm({ addTodo }) {
    // this state is created to store the value of input 
    const [ title, setTitle] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        // this check if input entered is only spaces or blank.
        // trim remove extra spaces from start and end and length checks the value is 0 or not
        if(title.trim().length === 0){
            alert("Please fill input")
            return;
        }

        // Here I am creating a newTodo in the form of object 
        const newTodo = {
            title : title,
            completed : false,
            id : uuid()
        }
        // Here calling the addTodo function created in the TodoApp because main state is in the TodoApp component
        addTodo(newTodo);
        // Here setting the title to empty once add is clicked
        setTitle("");
    }
  return (
    <form onSubmit={handleSubmit}>
        {/* first the value is set to title means and then set the title to e.target.value means whatever user will click that will be new title */}
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
        <button type='submit'>Add</button>
    </form>
  )
}

export default TodoForm