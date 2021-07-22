const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(port, () => console.log(`Example app listening on port port!`))