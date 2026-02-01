import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [username, Saveusername] = useState("")
  const [password, Savepassword] = useState("")

  const handlesave = async function() {
    try {
      const response = await axios.post("http://localhost:3000/signup", {
        username,
        password
      });
      console.log("saved succefully", response.data)
    } catch(e) {
      console.log("cant save", e)
    }
  }
  
  return (
    <div>
      <h1>signup here</h1>
      <div style={{display:'flex', justifyContent:"center", flexDirection:"column"}}>
        <input 
          onChange={(e) => Saveusername(e.target.value)}
          style={{padding: "15px", justifyContent:"center"}}
          title="username" 
          placeholder='enter username'
        />
        <br />
        <input 
          onChange={(e) => Savepassword(e.target.value)}
          style={{padding: "15px", justifyContent:"center"}} 
          title="password" 
          placeholder='enter password'
        />
        <br />
        <button onClick={handlesave} style={{padding: "5px", justifyContent:"center"}}>
          signup
        </button>
      </div>
    </div>
  )
}
export default App;
