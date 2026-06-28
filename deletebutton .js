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
type todotype = {title:string,id:string,setdata:any}
function Todo({title,id,setdata}:todotype){
  return <div style={{padding:20,margin:10,border:"1px solid black"}}>
    {title}
    <Deletebutton setdata={setdata} id ={id}/>
  </div>
  
}
function Deletebutton({setdata,id}){
  return(
    <button onClick={()=>{
      setdata(data=>data.filter(x=>x.id!=id))
    }}>delete</button>

  )

}
export default App;
