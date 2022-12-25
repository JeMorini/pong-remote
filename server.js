const http = require("http");
const socket = require("socket.io");
const express = require("express");
var cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socket(server);
app.use(cors());

const SERVER_HOST = "localhost";
const SERVER_PORT = 8080;

io.on("connection", (socket) => {
  console.log("[IO] Connection => Server has a new connection");
  //   socket.on("chat.message", async (data) => {
  //     console.log("[SOCKET] Chat.message => ", data);
  //     io.emit("chat.message", data);
  //     const { message, id } = data;
  //     try {
  //       console.log(201);
  //     } catch (err) {
  //       console.log(err, "ERRO");
  //     }
  //   });
  socket.on("movimentUpArrowUpP1", async (a) => {
    socket.emit("returnMovimentUpArrowUpP1", "voltou");
    io.emit("returnMovimentUpArrowUpP1", "voltou");
  });

  socket.on("movimentDownArrowUpP1", async (a) => {
    console.log(a);
    socket.emit("returnMovimentDownArrowUpP1", "voltou");
    io.emit("returnMovimentDownArrowUpP1", "voltou");
  });

  socket.on("movimentUpArrowDownP1", async (a) => {
    console.log(a);
    socket.emit("returnMovimentUpArrowDownP1", "voltou");
    io.emit("returnMovimentUpArrowDownP1", "voltou");
  });

  socket.on("movimentDownArrowDownP1", async (a) => {
    console.log(a);
    socket.emit("returnMovimentDownArrowDownP1", "voltou");
    io.emit("returnMovimentDownArrowDownP1", "voltou");
  });
  socket.on("start", async (a) => {
    socket.emit("returnStart", "voltou");
    io.emit("returnStart", "voltou");
  });

  socket.on("disconnect", async () => {
    console.log("[SOCKET] Disconnect => A connection was disconnected");
  });
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(
    `[HTTP] Listen => Server is running at http://${SERVER_HOST}:${SERVER_PORT}`
  );
  console.log("[HTTP] Listen => Press CTRL+C to stop it");
});
