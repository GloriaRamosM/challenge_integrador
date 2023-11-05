const express = require("express");
const rout = express.Router();
const adminControllers = require("../controllers/adminControllers");

rout.get("/", adminControllers.admin);
rout.get("/create", adminControllers.create);
rout.post("/create", adminControllers.createPost);
rout.get("/edit/:id", adminControllers.editId);

rout.put("/edit/:id", adminControllers.editIdPut);
rout.delete("/delete/:id", adminControllers.delete);

module.exports = rout;
