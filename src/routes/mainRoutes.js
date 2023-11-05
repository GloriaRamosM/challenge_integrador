const express = require("express");
const rout = express.Router();
const mainControllers = require("../controllers/mainControllers");

rout.get("/home", mainControllers.home);
rout.get("/contact", mainControllers.contact);
rout.get("/about", mainControllers.about);
rout.get("/faqs", mainControllers.faqs);

module.exports = rout;
