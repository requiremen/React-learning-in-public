import { useTodos } from "./hooks/custom";

function App(){
  const {data,setdata} = useTodos();
  const output = data.map(t=><Todo title ={t.title} id = {t.id} setdata = {setdata}/>)

  return(
    <div>
      {output}


    </div>
  )
}
//over here we have done prop drilling and with that the id thing we used to 
//delete realtime data
type todotype = {title:string,id:string,setdata:any}
function Todo({title,id,setdata}:todotype){
  return <div style={{padding:20,margin:10,border:"1px solid black"}}>
    {title}
    <button onClick={()=>{
      setdata(data=>data.filter(x=>x.id!=id))
    }}>delete</button>
  </div>
}
export default App;
