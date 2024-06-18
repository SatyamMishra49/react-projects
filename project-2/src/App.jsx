import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    // setCounter(counter+1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }
  const removeVal = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Counter Value : {counter}</h1>
      <button
      onClick={addValue}
      >Add Value</button> {" "}
      <button
      onClick={removeVal}
      >Remove Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
