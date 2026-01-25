function App(){
  return(
    <div>
  <Cardwrapper innerComponent = {<Textcomponents/>}></Cardwrapper>
  <Cardwrapper innerComponent = {<Textcomponents2/>}></Cardwrapper>
  </div>
  )

}
function Textcomponents(){
  return (
    <div>
     hi there
    </div>
  )

}

function Textcomponents2(){
  return (
    <div>
     hi there
    </div>
  )

}


function Cardwrapper({innerComponent}){
  return (
    <div style={{border:"2px solid black",padding:"20px"}}>
      {innerComponent}
     
    </div>
  )
    

  
  
}
export default App
