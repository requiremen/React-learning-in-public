function App(){
  return(
    <div>
  <Cardwrapper>
    hi there
  </Cardwrapper>
  
  </div>
  )

}



function Cardwrapper({children}){
  return (
    <div style={{border:"2px solid black",padding:"10px"}}>
      {children}
     
    </div>
  )
    

  
  
}
export default App
