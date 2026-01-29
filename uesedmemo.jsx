import { useState, useEffect, useMemo, memo } from 'react'
import axios from "axios"
import './App.css'

function App(){
  const[click,clickchange] = useState(0)
  const[cut,paste] = useState(0)
  
  return <div>
    <Buttoncompnent/>
      <button onClick={function(){
        clickchange(click + 1);
      }}>counter{click}</button>
    </div>
    
  
}
const Buttoncompnent = memo(function(){
  const[cut,paste] = useState(0)

  // so as of now we havent used memo in this so whenever we go on the console and click the counter the app 
  //rednders the button compoment given in app. but now if we use memo in that function of buttoncomponent the app will not render the button 
  // component function and save the redering until and unless assigned state to the function changes.
  console.log("rederening the button component")
  return <div>
    <h1>button rendered</h1>
    <button onClick={function(){
      paste(cut + 1)
    }}>clicking {cut}</button>

    
  </div>
}
  
)

  
  
export default App
