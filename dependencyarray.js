import axios from "axios";
import { useEffect, useState } from "react";

function App(){
    const [data,setdata] = useState(1);
    // now lets assume a frontend engineer have told you that have tped a component todo 
    // give me the id of todo in props so that the todo renders the data of the id which is given in the props
    // over here we have made the useState variable {data} as id and when we clcik on the button it increases in number ans shows
    // the id of the data and that data is called in child component  
    
    return (
        <div>
            <button onClick={()=>{
                setdata(1);
            }}>1</button>
            <button onClick={()=>{
                setdata(2);
            }}>2</button>
            <button onClick={()=>{
                setdata(3);
            }}>3</button>
            <Todo id = {data}/>
            
        </div>
    
    )
}
// agar parent render hoga toh childeren bhi render honge .
//ab we will have a discussion about how is the dependency array in use effect is working 
// for that we have to look at the example that the parent component have the id changing and the 
// id has been called in the child component and then with id called we have to link todos api accordiong the id being called
// axios.get("https://jsonplaceholder.typicode.com/todos"+id).then(response=>{
//         setnewdata(response.data.title);
// se we used this particular syntax 
function Todo(props){
    const id = props.id;
    const [newdata,setnewdata]=useState("")
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos/"+id).then(response=>{
        setnewdata(response.data.title);
    })

    },[id])
    // toh ab yahan pe jo id change ho rahi hai wahi responsible hai baar baar us api ko call karne ke liye 
    //kyunki bina uske useEffects doesn't have any idea that something have changed so it won't call the api again 
    // and it won't re render because useffect jyst calls the aip once and mount the data so to call it or to trigger it further
    //again we need to make a dependecy array
    
    
    return (
        <div style={{backgroundColor:"red",margin:20,padding:20}}>
            <div>
               {newdata}
            </div>
        </div>

    )
}
export default App
