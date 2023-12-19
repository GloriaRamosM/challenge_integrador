const path = require("path");
const { getAll, getOne } = require("../models/product.model");

const adminControllers = {
  admin: async (req, res) => {
    const data = await getAll();

    res.render(path.resolve(__dirname, "../views/admin/admin.ejs"), {
      data,
    });
  },
  createView: (req, res) =>
    res.render(path.resolve(__dirname, "../views/admin/create.ejs")),
  createItem: (req, res) => res.send("Route for admin/create view pero post"),
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
