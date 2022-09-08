import React, { useState } from 'react'

const Onchanging = () => {
  const [user,setUser] = useState ("");
  const handler = e => {
    setUser(e.target.value)
  }
  return (
    <div>
      <input name="user" type="text" placeholder="name" value={user}  onChange={handler}/>
       <br/>
       {user}
    </div>
  )
}

export default Onchanging
