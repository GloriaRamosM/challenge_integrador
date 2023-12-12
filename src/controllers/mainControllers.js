const mainControllers = {
  home: (req, res) => {
    res.render("index.ejs");
  },
  contact: (req, res) => res.render("../views/shop/contacto.ejs"),
  about: (req, res) => res.send("Route for About view"),
  faqs: (req, res) => res.send("Routes for faqs viwe"),
};

module.exports = mainControllers;
