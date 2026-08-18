import axios from "axios";
import { useEffect, useState } from "react"

function App(){
  const [data,setdata] = useState(0);
  return(
    <div>
      <button onClick={()=>{
        setdata(1)
      }}>1</button>
      <button onClick={()=>{
        setdata(2)
      }}>2</button>
      <button onClick={()=>{
        setdata(3)
      }}>3</button>
      <Todo id = {data}/>
    </div>
  )
}
function Todo(prop){
  const [update,updatedata] = useState("")
  let id = prop.id
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos/"+id).then(response=>{
      updatedata(response.data.title)
    })
  },[id])
  return(
    <div style={{backgroundColor:"yellow",margin:20,padding:10}}>
      <div>
        {update}

      </div>
    </div>
  )
}
export default App
