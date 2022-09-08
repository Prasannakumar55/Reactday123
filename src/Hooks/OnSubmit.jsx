import React, { useState } from 'react'

const OnSubmit = () => {
    const [data,setData] = useState (
    { username:"",
      password:"",  
    });
    const {username,password} = data;
    const onChange = e => {
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler = e => {
        e.preventDefault();
        console.log(data)
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input name='username' type="text" placeholder='username' value={username} onChange={onChange} /> <br/>
        <input name='password' type="password" placeholder='password' value={password} onChange={onChange} /> <br/>
        <input type="Submit"/>
      </form>
    </div>
  )
}

export default OnSubmit