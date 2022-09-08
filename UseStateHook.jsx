import React, {useState, } from 'react'

const UseStateHook = () => {
  const [journey,setjourney] = useState ("from Hyderabad")
  return (
    <div>
    <h1>UseState Hook Implementation</h1>
    <h2>{journey}</h2>
      <button onClick={() => setjourney("to Mumbai")}>Start journey</button>
    </div>
  )
}

export default UseStateHook
