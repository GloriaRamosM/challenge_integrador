const path = require("path");
const { getAll, getOne, create } = require("../models/product.model");

const adminControllers = {
  admin: async (req, res) => {
    const data = await getAll();

    res.render(path.resolve(__dirname, "../views/admin/admin.ejs"), {
      data,
    });
  },

  createView: (req, res) =>
    res.render(path.resolve(__dirname, "../views/admin/create.ejs")),

  createItem: async (req, res) => {
    const product_schema = {
      product_name: req.body.name,
      product_description: req.body.description,
      price: Number(req.body.price),
      stock: Number(req.body.stock),
      discount: Number(req.body.discount),
      sku: req.body.sku,
      dues: Number(req.body.dues),
      img_front: req.files[0].originalname,
      img_back: req.files[1].originalname,
      licence_id: Number(req.body.licence),
      category_id: Number(req.body.category),
    };

    await create([Object.values(product_schema)]);

    res.redirect("/admin");
  },

  editView: async (req, res) => {
    const { id } = req.params;
    const [product] = await getOne({ product_id: id });

    res.render(path.resolve(__dirname, "../views/admin/edit.ejs"), {
      product,
    });
  },
  editItem: (req, res) => res.send("Route for admin/edit/:id pero put"),

  deleteItem: (req, res) => res.send("Route for admin delete id view"),
};

module.exports = adminControllers;
