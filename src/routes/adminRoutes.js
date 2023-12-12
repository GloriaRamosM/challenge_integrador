const express = require("express");
const rout = express.Router();
const {
  admin,
  createView,
  createItem,
  editView,
  editItem,
  deleteItem,
} = require("../controllers/adminControllers");

rout.get("/admin", admin);
rout.get("/create", createView);
rout.post("/create", createItem);
rout.get("/edit/:id", editView);
rout.put("/edit/:id", editItem);
rout.delete("/delete/:id", deleteItem);

module.exports = rout;
