import axios from "axios";
import { useEffect, useState } from "react";

export function useTodos(){
     const [data,setdata]= useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then(reponse=>{
    setdata(reponse.data)
  })
   let interval = setInterval(()=>{
     axios.get("https://jsonplaceholder.typicode.com/todos").then(reponse=>{
    setdata(reponse.data)
  })
   },100000)
   return ()=> clearInterval(interval);
   
  },[])
  return data


}
