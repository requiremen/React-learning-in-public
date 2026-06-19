import axios from "axios";
import { useEffect, useState } from "react";

function App(){
    const [data,setdata] = useState([]);
    // now lets assume we want to send the request to the api to render data on button click 
    // so the first intution of you should be to define the state variable so that we can re render it when ever it is called 
    // so over here whenever i click the button the data gets rendered from the api 
    return (
        <div>
            <button onClick={()=>{
                axios.get("https://jsonplaceholder.typicode.com/todos/1").then(response=>{
                    setdata(response.data.title)
                })
            }}>1</button>
            <button onClick={()=>{
                axios.get("https://jsonplaceholder.typicode.com/todos/2").then(response=>{
                    setdata(response.data.title)
                })
            }}>2</button>
            
        <div><Todo title = {data}/></div>
            

        </div>
    )
}
function Todo(props){
    return (
        <div style={{backgroundColor:"red",margin:20,padding:20}}>
            <div>
                {props.title}
            </div>
        </div>

    )
}
export default App
