const express = require("express");
const app = express();
const mainRoutes = require("./src/routes/mainRoutes");
const shopRoutes = require("./src/routes/shopRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const authRoutes = require("./src/routes/authRoutes");

app.use(express.static("public"));

app.use(express.urlencoded());
app.use(express.json());

app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/admin", adminRoutes);
app.use("/admin", authRoutes);

app.listen(4500, () =>
  console.log("Servidor corriendo en http://localhost:4500")
);
