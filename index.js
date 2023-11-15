const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

const server = app.listen(PORT,()=>{
    console.log("Server is start on",PORT);
});

const io = require('socket.io')(server,{
      cors: { 
         origin: "*", 
         methods: ["GET", "POST"],
         allowedHeaders: ["content-type"],
         credentials: true
      }
   });

io.on('connection',(socket)=>{
    console.log('Connect success',socket.id);
    socket.on('Disconnected', ()=>{
        console.log('Disconnected', socket.id);
    });

    socket.on('message', (data)=>{
        console.log(data);
        io.emit('message-receive',data);
    });

    
}) 

 