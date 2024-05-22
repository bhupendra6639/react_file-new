import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BHUPENDRA from './bhupendra'

function App() {
  const numbers = [1, 2, 3, 4,];
  numbers.map((number) => {
    console.log(number * number);
  });
  return (
    <>
      {numbers.map((number) => (
        <BHUPENDRA
          numbers={number * number}
        />
      ))}
      <BHUPENDRA />
    </>
  )
}

export default App
