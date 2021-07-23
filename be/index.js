const { EDESTADDRREQ } = require("constants");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
const port = 5000;
const jwt = require("jsonwebtoken");
const dayjs = require("dayjs");
const cors = require("cors");

app.use(express.json());
app.use(cors());

/* app.get('/', (req, res) => res.send('Hello World!')) */
app.post("/login", (req, res) => {
  const Body = req.body;
  console.log(req.body);
  if (Body.name) {
    const Token = jwt.sign(
      {
        exp: dayjs().add(1, "h").valueOf(),
        name: Body.name,
      },
      "secret"
    );
    res.json({
      token: Token,
    });
    return;
  }
  res.json({});
  return;
});

app.get('/validtoken', (req, res)=>{
  const Body = req.body;
  const Token = Body.token;
  console.log(Token);
  if (Token) {
    jwt.verify(Token, "secret", (err, token) => {
      if (err) {
        res.json({
          isValidToken: false
        });
        return;
      } else if (dayjs().isAfter(token.exp)) {
        res.json({
          isValidToken: false
        });
        return;
      }
      res.json({
        isValidToken: true 
      });
      return;
    });
  }
  res.json({
    isValidToken: false
  });
  return;

})

io.on("connection", (socket) => {
  console.log("a user connected");
});

/* io.use((socket, next) => {
  const Token = socket.handshake.auth.token;
  console.log(Token);
  if (Token) {
    jwt.verify(Token, "secret", (err, token) => {
      if (err) {
        next(new Error("there was an error please log again"));
      } else if (dayjs().isAfter(token.exp)) {
        next(new Error("Session expired, please log in"));
      }
      next();
    });
  }
  next();
}); */

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    socket.join(msg.room);
    io.to(msg.room).emit("chat message", msg);
  });
});

server.listen(port, () => console.log(`Example app listening on port port!`));
