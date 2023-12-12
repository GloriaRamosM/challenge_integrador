const mainControllers = {
  home: (req, res) => {
    res.render("index.ejs", {
      title: "HOME",
    });
  },
  contact: (req, res) => res.send("Route for Contact view"),
  about: (req, res) => res.send("Route for About view"),
  faqs: (req, res) => res.send("Routes for faqs viwe"),
};

module.exports = mainControllers;
