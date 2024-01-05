// Create a form that takes user input and display it in real time

import React, { useState } from 'react'
import './Form.css'

function form() {

    const [data,  setData] = useState("");

    function handleChange(e) {
        e.preventDefault(); 
        setData(e.target.value);
    }
  return (
    <div className='form'>
      <form>
        <label htmlFor='input'>User Input: </label>
        <input type='text' id='input' value={data} onChange={handleChange}/>
      </form>
      <div className='container'>
        <h1>User Typed : {data}</h1>
      </div>
    </div>
  )
}

export default form
