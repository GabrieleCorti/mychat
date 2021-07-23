const { EDESTADDRREQ } = require('constants');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
    cors: {
      origin: "http://localhost:3000",
    }
  });
const port = 5000
const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');
const cors = require('cors');

app.use(express.json());
app.use(cors());


/* app.get('/', (req, res) => res.send('Hello World!')) */
app.post('/login', (req, res) => {
    const Body = req.body;
    console.log(req.body);
    if (Body.name) {
      const Token = jwt.sign({
        exp: dayjs().add(1, 'h').valueOf(),
        name: Body.name
      }, 'secret');
      res.json({
        token: Token
      });
      return;
    }
    res.json({});
    return;
})

io.on('connection', (socket) => {
    console.log('a user connected');
});

/* io.on('connection', (socket) => {
  socket.on('room', room => {
   
    /* console.log(socket); 
  });
}); */

io.on('connection', (socket)=> {
    socket.on('chat message', (msg)=>{
        socket.join(msg.room);
       io.to(msg.room).emit('chat message', msg);
    });
});

server.listen(port, () => console.log(`Example app listening on port port!`))