// rendering the app all childeren component 
// with rendering app

function App(){
  const[title,setTitle] = useState("my name is akshat")
  function settitle(){

    setTitle("my name is "+ Math.random())

  }
  return(<div>
  <button onClick={settitle}>click me</button>
  <Header title={title}></Header>

  <Header title= "akshat"></Header>
  
  </div>
  )
}
function Header({title}){
  return(
    <div>
      {title}
    </div>
  )
}
export default App

