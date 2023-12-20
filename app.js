const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mainRoutes = require("./src/routes/mainRoutes");
const shopRoutes = require("./src/routes/shopRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const authRoutes = require("./src/routes/authRoutes");
const { initSession } = require("./src/middlewares/session");

// aca estoy usando dotenv para llamar al Port que tengo secreto en ese archivo, y asi no lo escribo aca
require("dotenv").config();

const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

app.use(express.static("public"));

/* CREAR SESION DE USUARIO */

// app.use(initSession());

// app.use((req, res, next) => {
//   res.locals.isLogged = req.session.isLogged;
//   next();
// });

// Para traducir js a que nuestro programa lo pueda entender, todo lo que llegue con metodos post con un body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Override para habilitar los metodos PUT y DELETE
app.use(methodOverride("_method"));

app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
