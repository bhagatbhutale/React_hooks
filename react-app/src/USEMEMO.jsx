import React, { useMemo, useState } from 'react'

const USEMEMO = () => {

    const [number , setNumber] = useState(0)
    const [counter, setCounter] = useState(0)

    function cubNum(num) {
        console.log("Calculate done !");
        return Math.pow(num, 3);
        
    }

    const result = useMemo(() => cubNum(number), [number]);

  return (
    <>
    <input type="number" value={number} placeholder='Enter Number'
    onChange={(e) => {setNumber(e.target.value)}} />
    <h1>Cube of the Number : {result}</h1>
    <button onClick={() => {
        setCounter(counter + 1)
    }} >Counter++</button>
    <h1>Counter : {counter}</h1>
    </>
  )
}

export default USEMEMO
