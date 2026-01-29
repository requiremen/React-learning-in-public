import { useState, useEffect, useMemo, memo } from 'react'
import axios from "axios"
import './App.css'
import { useCallback } from 'react'

function App(){
  const[click,clickchange] = useState(0)
  const inputcomponent = useCallback(function(){
    console.log("hello world")
  },[])
  //toh ab dependency change hogi tabhi button component re render hoga

  return <div>
    <Buttoncompnent inputcomponent = {inputcomponent}/>
      <button onClick={function(){
        clickchange(click + 1);
      }}>counter{click}</button>
    </div>
    //acha toh console pe dekha toh bhai baar baar app dono function ko render kar raha tha aisa kyun jabbki memo use kar rakha hai maine
    // toh isliye kyunki even if memo is used react itna smart nahin hai ki woh soch sake ki dusre click pe jo input compnent aya hai woh same
    // function se aya hai 
    //so isliye ham call back use karte hai
  
}
const Buttoncompnent = memo(function(inputcomponent){
  const[cut,paste] = useState(0)
console.log("rederening the button component")
  return <div>
   <button onClick={function(){
      paste(cut + 1)
    }}>clicking {cut}</button>

    
  </div>
}
  
)

  
  
export default App
