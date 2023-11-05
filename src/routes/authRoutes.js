const express = require("express");
const rout = express.Router();
const authControllers = require("../controllers/authControllers");

rout.get("/login", authControllers.login);
rout.post("/login", authControllers.loginPost);

rout.get("/register", authControllers.register);
rout.post("/register", authControllers.registerPost);

module.exports = rout;
