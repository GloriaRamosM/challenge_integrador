const adminControllers = {
  admin: (req, res) => res.send("Route for Admin view"),
  create: (req, res) => res.send("Route for admin/create view"),
  createPost: (req, res) => res.send("Route for admin/create view pero post"),
  editId: (req, res) => res.send("Route for admin/edit id pero get "),
  editIdPut: (req, res) => res.send("Route for admin/edit/:id pero put"),
  delete: (req, res) => res.send("Route for admin delete id view"),
};

module.exports = adminControllers;
