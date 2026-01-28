import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [clickid, clickID] = useState()

  return (
    <div>
      <button onClick={() => clickID(1)}>1</button>
      <button onClick={() => clickID(2)}>2</button>
      <button onClick={() => clickID(3)}>3</button>

      <Todo id={clickid}></Todo>
    </div>
  )
}

function Todo({ id }) {
  const [todos, setTodo] = useState({})

  useEffect(function () {
    axios.get(`http://localhost:3000/todos?id=${id}`)
      .then(function (response) {
        setTodo(response.data)
      })
  }, [id])

  return (
    <div>
      <h1>{todos?.title}</h1>
      {todos?.description}
    </div>
  )
}

export default App
