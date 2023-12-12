const path = require("path");

const authControllers = {
  login: (req, res) => {
    res.render(path.resolve(__dirname, "../views/auth/login.ejs"));
  },
  doLogin: (req, res) => res.send("Route for admin/login pero post view"),
  register: (req, res) => {
    res.render(path.resolve(__dirname, "../views/auth/register.ejs"));
  },
  doRegister: (req, res) =>
    res.send("Route for admin/ register pero post view"),
  logout: (req, res) => res.send("aca logout"),
};

module.exports = authControllers;
