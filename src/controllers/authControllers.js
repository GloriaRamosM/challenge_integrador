const authControllers = {
  login: (req, res) => res.send("Route for admin/login view"),
  loginPost: (req, res) => res.send("Route for admin/login pero post view"),
  register: (req, res) => res.send("Route for admin / resgister view"),
  registerPost: (req, res) =>
    res.send("Route for admin/ register pero post view"),
};

module.exports = authControllers;
