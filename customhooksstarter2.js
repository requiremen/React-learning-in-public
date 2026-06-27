import { useTodos } from "./hooks/custom";
function App(){
 const data = useTodos();
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
