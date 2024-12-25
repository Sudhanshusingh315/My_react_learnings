const express = require('express');
const {createServer} = require("http");
const {Server} = require("socket.io")
const cors = require('cors');

const app = express()
// basic setup
const httpServer = createServer();
const io = new Server(httpServer,{
  cors:{
    origin:"*",
    credentials:true,
  }  
});

io.on("connection",(socket)=>{
    console.log(socket.id);
    // this .emit will send the message to that socket only
    socket.emit("welcome",`welcome to the server ${socket.id}`);

    // whereas doing .broadcast.emit will send the message to everyone except that particular socket.
    socket.broadcast.emit("join",`new socket ${socket.id} joined the io`)
})


const port = 3000

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})