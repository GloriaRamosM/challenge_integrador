const express = require("express");
const rout = express.Router();
const upload = require("../middlewares/uploadFiles");

const {
  admin,
  createView,
  createItem,
  editView,
  editItem,
  deleteItem,
} = require("../controllers/adminControllers");

rout.get("/", admin);
rout.get("/create", createView);
rout.post("/create", upload.array("images", 2), createItem);
rout.get("/edit/:id", editView);
rout.put("/edit/:id", upload.array("images", 2), editItem);
rout.delete("/delete/:id", deleteItem);

module.exports = rout;
