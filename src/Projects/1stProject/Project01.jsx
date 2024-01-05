// Counter Application

import React, { useState } from 'react'
import './Project01.css'


function Project01() {

  const [count , setCount] = useState(0)

  function increament() {
    setCount(count + 1);
  }

  function decreament() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }
  return (
    <div className='app'>
      <div>
        <h1>Counter:{count}</h1>
      </div>
      <div>
        <button onClick={increament}>Increament</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decreament}>Decreament</button>
        
      </div>
    </div>
  )
}

export default Project01
