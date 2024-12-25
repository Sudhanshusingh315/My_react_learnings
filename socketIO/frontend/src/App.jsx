import { useEffect, useState } from 'react'
import './App.css'
import {io} from "socket.io-client";
function App() {
  const [count, setCount] = useState(0)
  const socket = io("http://localhost:3000");
  useEffect(()=>{
    socket.on("connect",()=>{
      console.log(`socket connected ${socket.id}`);
    })
    socket.on("welcome",(s)=>{
      console.log(s);
    })
    socket.on("join",(message)=>{
      console.log(message);
    })
  },[])

  return (
    <div></div>
  )
}

export default App
