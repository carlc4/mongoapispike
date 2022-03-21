const express = require("express");
const app = express();
app.use(express.json());
const { getUsers } = require("./controllers/users.controllers");

app.use("/api/users", getUsers);

app.listen(process.env.port || 9090, function () {
  console.log("Server online..");
});

module.exports = app;
