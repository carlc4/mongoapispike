const express = require("express");
const userRouter = express.Router();
const { getUsers } = require("");
const { methodError } = require("../errors/appErrors");
const app = express();

console.log("In user Router");

userRouter
  .route("/")
  .get(getUsers)
  .patch(methodError)
  .delete(methodError)
  .post(methodError);

module.exports = topicsRouter;
