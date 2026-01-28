import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'

function App(){
  const [counter,increaseCount] = useState(0)
  const [input,inputdone]= useState(1)
  let count = 0;
  for(let i = 0;i<input;i++){
    count = count +10;
  }

  return<div>
    <input onChange={function(e){
      console.log(e.target.value)
      inputdone(e.target.value)
    }} placeholder='enter a number'></input>
    <br></br>
    sum is {count}
    <button onClick={function(){
      increaseCount(counter+1)
    }}>counter({counter})</button>

    </div>
}
  
export default App
