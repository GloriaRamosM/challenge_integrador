const path = require("path");

const data = [
  {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/multimedia/pokemon/pidgeotto-1.webp",
    img_back: "/img/multimedia/pokemon/pidgeotto-box.webp",
  },
  {
    product_id: 2,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Charmander",
    product_description: "Figura coleccionable pokemon",
    product_price: 1999.99,
    dues: 10,
    product_sku: "PKM001002",
    img_front: "/img/multimedia/pokemon/charmander-1.webp",
    img_back: "/img/multimedia/pokemon/charmander-box.webp",
  },
  {
    product_id: 3,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/multimedia/pokemon/pidgeotto-1.webp",
    img_back: "/img/multimedia/pokemon/pidgeotto-box.webp",
  },
  {
    product_id: 4,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/multimedia/pokemon/pidgeotto-1.webp",
    img_back: "/img/multimedia/pokemon/pidgeotto-box.webp",
  },
  {
    product_id: 5,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/multimedia/pokemon/pidgeotto-1.webp",
    img_back: "/img/multimedia/pokemon/pidgeotto-box.webp",
  },
  {
    product_id: 6,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/multimedia/pokemon/pidgeotto-1.webp",
    img_back: "/img/multimedia/pokemon/pidgeotto-box.webp",
  },
  {
    product_id: 7,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/multimedia/pokemon/pidgeotto-1.webp",
    img_back: "/img/multimedia/pokemon/pidgeotto-box.webp",
  },
  {
    product_id: 8,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/multimedia/pokemon/pidgeotto-1.webp",
    img_back: "/img/multimedia/pokemon/pidgeotto-box.webp",
  },
  {
    product_id: 9,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/multimedia/pokemon/charmander-1.webp",
    img_back: "/img/multimedia/pokemon/pidgeotto-box.webp",
  },
];

const shopControllers = {
  shop: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"), {
      data,
    });
  },
  itemId: (req, res) => {
    const itemId = req.params.id;
    const item = data.find((item) => item.product_id == itemId);

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
