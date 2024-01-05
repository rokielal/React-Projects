// Toggle funcationality

import React, { useState } from 'react'

function Toggle() {

    const [toggle, setToggle] = useState(false);


  return (
    <div>
     <label>
        <input type='checkbox' onChange={() => setToggle(!toggle)}/>
     </label>
     <h3>{toggle ? 'ON' : 'OFF'}</h3>
    </div>
  )
}

export default Toggle
