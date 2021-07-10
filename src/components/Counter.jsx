import { useState } from 'react'

export function Counter() {
  let [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }

  return (
    <>
      <p>{counter}</p>
      <button onClick={increment}>Increment 3</button>
    </>
  )
}