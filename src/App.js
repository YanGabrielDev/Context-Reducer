import './App.css';
import React, { useReducer } from 'react';
import { AppCountext } from './context/AppContext';
import { Div } from './components/Div';
import { globalState } from './context/AppContext/data';

const reducer = (state, action) => {
  return {...state}
}

function App() {
  const [state, dispatch] = useReducer(reducer, globalState)
  const {title, body, counter} = state
  return (
    <>
    <div>
      <h1>
       {title}, {counter}
      </h1>
      <button onClick={() => dispatch({type: 'muda'})}>Click</button>
    </div>
    </>)
}

export default App;
