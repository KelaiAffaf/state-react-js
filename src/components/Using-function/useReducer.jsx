import './App3.css'

import  {useReducer, useState } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return {count: initialState.count};
    default:
      throw new Error();
  }
}

const initialState = {count: 0};


const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="box">
      <div> Count: {state.count} </div>
       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
       <button onClick={() => dispatch({type: 'increment'})}>+</button>
     
     
    </div>
  )
}
export default UseReducer;
