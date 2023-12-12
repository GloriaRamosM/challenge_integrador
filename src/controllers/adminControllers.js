const path = require("path");

const adminControllers = {
  admin: (req, res) => {
    res.render(path.resolve(__dirname, "../views/admin/admin.ejs"));
  },
  createView: (req, res) =>
    res.render(path.resolve(__dirname, "../views/admin/create.ejs")),
  createItem: (req, res) => res.send("Route for admin/create view pero post"),
  editView: (req, res) => {
    res.render(path.resolve(__dirname, "../views/admin/edit.ejs"));
  },
  editItem: (req, res) => res.send("Route for admin/edit/:id pero put"),
  deleteItem: (req, res) => res.send("Route for admin delete id view"),
};

module.exports = adminControllers;
