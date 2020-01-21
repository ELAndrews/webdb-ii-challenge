const express = require("express");
const routes = require("./data/routers");
const helmet = require("helmet");

const server = express();

server.use(express.json());
server.use(helmet());

server.use(routes);

server.get("/", (req, res) => {
  res.send("<h2>Server 5001 is Working</h2>");
});

module.exports = server;
