const express = require("express");
const rout = express.Router();
const {
  login,
  doLogin,
  register,
  doRegister,
  logout,
} = require("../controllers/authControllers");

rout.get("/login", login);
rout.post("/login", doLogin);

rout.get("/register", register);
rout.post("/register", doRegister);
rout.get("logout", logout);

module.exports = rout;
