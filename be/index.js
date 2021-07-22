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

/* app.get('/', (req, res) => res.send('Hello World!')) */

io.on('connection', (socket) => {
    console.log('a user connected');
});
io.on('disconnect', () => {
    console.log('ok');
 });

server.listen(port, () => console.log(`Example app listening on port port!`))