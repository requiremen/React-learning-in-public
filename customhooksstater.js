import axios from "axios";
import { useEffect, useState } from "react";
function App(){
  const [data,setdata]= useState([]);
  // here the useeffect is used to mount the data and stop the required re render
  // until and unless i dont give any other depenedency array

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then(reponse=>{
    setdata(reponse.data)
  })
  // this interval is called and its use is to check wheather is there any new
  //data putup in the backend and accordingly render the data i mean this 
  // thing checksup the backend and updates the state variable if there is any update 
  //data
   let interval = setInterval(()=>{
     axios.get("https://jsonplaceholder.typicode.com/todos").then(reponse=>{
    setdata(reponse.data)
  })
   },100000)
   return ()=> clearInterval(interval);
   
  },[])

  const output = data.map(d=><Todo title={d.title}/>)
 return(
    <div>
      {output}

    </div>
  )
}
function Todo(props){
  return(
    <div style={{padding:20,margin:20,border:'1px solid black'}}>
      {props.title}
    </div>
  )
}
export default App;
// okay this is something we make a functionality in our todo rendering but yaar the thing is we are leading to lot of code and gibbrish things on our screen and assume if a frontend engineer joins in the team and ends up getting confused with the codes and don’t know where to edit the design we have to refactor our code and make a different file in the files of our projects which says custom hooks 

// and for consideration we have custom hooks which means that we write a function such as useAkshat, useHook— these all will be called as function and contains other hooks inside it which shows the uniqueness of the hook.
