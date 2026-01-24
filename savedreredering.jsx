
//rerenering of all the children element is saved now

function App(){
  return (
    <div>
      <Headerwithbutton></Headerwithbutton>  
      <Header title ="my name is akshat"></Header>
    </div>
  )
  function Headerwithbutton(){
    const [title,setTitle] = useState("my name is akshubaby")
    function Settitle(){
      setTitle("my name is akshu"+ "i love annu"+""+500000*Math.random()+ "times")
    }

    return (
      <div>

        <button onClick={Settitle}>click me</button>
        <Header title ={title}></Header>
      </div>
    )

      
    

  }
  function Header({title}){
   
    return (
      <div>
        {title}
      </div>
    )


  }

}
export default App
