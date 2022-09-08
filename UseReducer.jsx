import React from 'react';
import { useReducer } from 'react';

const initialState = {count : 0}

function reducer (state, action) {
        switch (action) {
            case 'increment' :
                return {count: state.count + 1};
            case 'decrement' :
                return {count: state.count - 1};
            case 'reset' :
                return {count: state.count * 0};
            default :
                return {}           
        }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer (reducer,initialState);
  return (
    <div>
      <h1>UseReducer Hook Implementation</h1>
      <h2>Count : {state.count}</h2>
      <button onClick={() => dispatch('increment')}> + </button>
      <button onClick={() => dispatch('decrement')}> - </button>
      <button onClick={() => dispatch('reset')}> reset </button>
    </div>
  )
}

export default UseReducer


























/*import React, { useReducer } from 'react'

const initialState = {count : 0};

function reducer (state, action) {
        switch (action) {
            case 'increment':
                return {count: state.count + 1};
            case 'decrement' :
                return {count: state.count - 1};    
            case "reset" :
                return {count: state.count * 0};
            default :
                return {};    
        }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer (reducer,initialState);

  return (
    <div>
      <h1>Count : { state.count } </h1>
      <button onClick={() => dispatch('increment')}>+</button>
      <button onClick={() => dispatch('decrement')}>-</button>
      <button onClick={() => dispatch('reset' )}>reset</button>
    </div>
  )
}

export default UseReducer */