import React from 'react'
import { useState } from 'react'
function App() {
  const [inputValue, setInputValue] = useState("")
  const [v, setv] = useState("")
  const getValue = (e) => {
    setInputValue(e.target.value)
  }
  const printValue = (e) => {
    e.preventDefault()
    setv(inputValue)
  }

  return (
    <div>
      <form onSubmit={printValue} action="">
        <input onChange={getValue} type="text" />
        <button type='submit' >Submit</button>
      </form>


      <h1>input Value : {v} </h1>
    </div>
  )
}

export default App
