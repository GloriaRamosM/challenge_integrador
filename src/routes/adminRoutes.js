const express = require("express");
const rout = express.Router();
const multer = require("multer");
const path = require("path");

const {
  admin,
  createView,
  createItem,
  editView,
  editItem,
  deleteItem,
} = require("../controllers/adminControllers");

const storage = multer.diskStorage({
  destination: (req, file, cb) =>
    cb(null, path.resolve(__dirname, "../../public/img/multimedia/products")),
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

rout.get("/", admin);
rout.get("/create", createView);
rout.post("/create", upload.array("images", 2), createItem);
rout.get("/edit/:id", editView);
rout.put("/edit/:id", editItem);
rout.delete("/delete/:id", deleteItem);

module.exports = rout;
