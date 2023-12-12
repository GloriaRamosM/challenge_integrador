const express = require("express");
const rout = express.Router();
const {
  home,
  contact,
  about,
  faqs,
} = require("../controllers/mainControllers");

rout.get("/home", home);
rout.get("/", home);
rout.get("/contact", contact);
rout.get("/about", about);
rout.get("/faqs", faqs);

module.exports = rout;
