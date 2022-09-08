import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {
    const [count,setCount] = useState (0);
    useEffect(() => console.log(count),[count])
  return (
    <div>
    <h1>UseEffect Hook Implementation</h1>
       <h2>{count}</h2> 
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  )
}

export default UseEffectHook
