const express = require("express");
const rout = express.Router();
const shopController = require("../controllers/shopControllers");

rout.get("/", shopController.shop);
rout.get("/item/:id", shopController.itemId);
rout.post("/item/:id/add", shopController.itemIdAdd);

rout.get("/cart", shopController.cart);
rout.post("/cart", shopController.cartPost);
module.exports = rout;
