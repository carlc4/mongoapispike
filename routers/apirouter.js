const express = require("express");
const userRouter = require("./userRouter");

const apiRouter = express.Router();

console.log("In apiRouter");
apiRouter.use("/users", userRouter);

module.exports = apiRouter;
