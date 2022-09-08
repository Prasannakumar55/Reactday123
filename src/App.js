import React from 'react'
import './App.css';
import UseStateHook from './Hooks/UseStateHook';
import UseEffectHook from './Hooks/UseEffectHook';
import UseReducer from './Hooks/UseReducer';
import AxiosFetch from './Hooks/AxiosFetch';
 
 
function App() {
  
  return (
    <div className="App">
    <center>
      <UseStateHook/>
      <UseEffectHook/>
      <UseReducer/> <br/> <br/> <br/>
      <AxiosFetch/>
      </center>
    </div>
  );
}

export default App;