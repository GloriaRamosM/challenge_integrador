const express = require("express");
const rout = express.Router();
const {
  shop,
  itemId,
  itemIdAdd,
  cart,
  addToCart,
} = require("../controllers/shopControllers");

rout.get("/", shop);
rout.get("/item/:id", itemId);
rout.post("/item/:id/add", itemIdAdd);

rout.get("/cart", cart);
rout.post("/cart", addToCart);
module.exports = rout;
