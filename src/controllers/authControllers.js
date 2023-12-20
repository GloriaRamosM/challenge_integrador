const path = require("path");

// const credentials = {
//   email: "pepe@gmail.com",
//   password: "pepe123",
// };

const authControllers = {
  login: (req, res) => {
    res.render(path.resolve(__dirname, "../views/auth/login.ejs"));
  },
  doLogin: (req, res) => res.send("Vista de Logearse"),
  // {
  //   // const { email, password } = req.body;

  //   // const validateEmail = credentials.email == email;
  //   // const validatePassword = credentials.password == password;

  //   // req.session.isLogged = validateEmail && validatePassword ? true : false;

  //   // if (req.session.isLogged) {
  //   //   res.locals.isLogged = true;
  //   //   return res.redirect("/admin");
  //   // }

  //   // return res.status(401).send("Credenciales invalidas");
  // },
  register: (req, res) => {
    res.render(path.resolve(__dirname, "../views/auth/register.ejs"));
  },
  doRegister: (req, res) =>
    res.send("Route for admin/ register pero post view"),
  logout: (req, res) => res.send("aca logout"),
};

module.exports = authControllers;
