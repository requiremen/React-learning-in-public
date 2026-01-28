import { useState, useEffect, useMemo } from 'react'
import axios from "axios"
import './App.css'

function App(){
  const [counter,increaseCount] = useState(0)
  const [input,inputdone]= useState(1)
  let count = useMemo(function(){//use memo ka kaam hai ki woh jabtak dependency change nahin hogi
    //tab tak usse render nahin karega is case jab tak input nahin milega tab tak woh usse render nahin karega chahe kuch aur change hojaye
    //woh chnage nahin hoga use memo in input kob dependency ki taarah liya hai so whenvever it will change it will render the logic 
  let firstcount = 0;
  for(let i = 0;i<input;i++){
    firstcount = firstcount +10;
    
  }
  return firstcount;
  
},[input])//yeh input dependency hai
 
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
