import React, { useEffect, useRef, useState } from 'react'

const USEREF = () => {

    // Example 1.
    // const [value, setValue] = useState(0);
 
    // const count = useRef(0)

    // useEffect(() => {
    //     count.current = count.current + 1;
    // })

    // Example 2.

    const inputEle = useRef()

    const btnClick = () => {

        if(inputEle.current.value === "") {
            alert("Please Enter a Value")
        }

        console.log(inputEle.current.value);
        
    }

  return (
    <div>
      {/* // Example 2 */}

      <input type="text" ref={inputEle} />
      <br /> <br />
      <button onClick={btnClick} >Click Here</button>
      {/* // Example 1 */}
      {/* <button onClick={() => {
    setValue(prev => prev + 1)
}} >-1</button>

<h1>{value}</h1>

<button onClick={() => {
    setValue(prev => prev -1)
}} >+1</button>

<h1>Render Count : {count.current}</h1> */}
    </div>
  );
}

export default USEREF
