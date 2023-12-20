const path = require("path");
const { getAll, getOne } = require("../models/product.model");

const shopControllers = {
  shop: async (req, res) => {
    const data = await getAll();

    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"), {
      data,
    });
  },
  itemId: async (req, res) => {
    const itemId = req.params.id;
    console.log(itemId);
    const [item] = await getOne({ product_id: itemId });

    res.render(path.resolve(__dirname, "../views/shop/item.ejs"), {
      item,
    });
  },
  itemIdAdd: (req, res) =>
    // aca mas adelante va la logica para anadir a la BD
    res.send("Route for  add the current item to the shop cart"),
  cart: (req, res) =>
    res.render(path.resolve(__dirname, "../views/shop/cart.ejs")),
  addToCart: (req, res) => res.send("para agregar un item al carrito"),
};

module.exports = shopControllers;
