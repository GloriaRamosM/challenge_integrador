const path = require("path");

const shopControllers = {
  shop: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"));
  },
  itemId: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/item.ejs"));
  },
  itemIdAdd: (req, res) =>
    // aca mas adelante va la logica para anadir a la BD
    res.send("Route for  add the current item to the shop cart"),
  cart: (req, res) => res.send("Route for cart view"),
  addToCart: (req, res) => res.send("para agregar un item al carrito"),
};

module.exports = shopControllers;
