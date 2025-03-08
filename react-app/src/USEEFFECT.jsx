import React, { useEffect, useState } from 'react'

const USEEFFECT = () => {

const [ count,  setCount] = useState(0);

useEffect(() => {
  setTimeout(() => {
    setCount(count => count + 1);
  }, 2000);

}, [count])

  return (
    <>
     I ' ve Rendered {count} Times'
    </>
  )
}

export default USEEFFECT

