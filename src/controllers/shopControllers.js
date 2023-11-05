const shopControllers = {
  shop: (req, res) => res.send("Route for Shop view"),
  itemId: (req, res) =>
    res.send("Route for find and retrieve a product from an ID"),
  itemIdAdd: (req, res) =>
    res.send("Route for  add the current item to the shop cart"),
  cart: (req, res) => res.send("Route for cart view"),
  cartPost: (req, res) => res.send("Route for got to checkout page"),
};

module.exports = shopControllers;
