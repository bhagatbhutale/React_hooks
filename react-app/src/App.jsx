import React from 'react'

import UseEffect from './USEEFFECT';
import USEREF from './USEREF';
// import { useState } from 'react'

const App = () => {

  // 1. UseState Example 1;
  // const [color, setColor] = useState("RED");

  // const changeColor = () => {
  //   setColor("Yellow");
  // };

  // Example 2 -->
  // const [ count , setCount] = useState(0);

  // const increase = () => {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 1000)
  // }

  // const decrease = () => {
  //   setCount(count - 1);
  // }

  return (
    <>
      {/* <UseEffect /> */}
      <USEREF />

    </>
  );
}

export default App
