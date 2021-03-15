const projectModel = require("../models/Project.model")

function show(req, res) {
    res.render("profile", {
        title: "Profile Page",
    });
}

module.exports = {
    show
  };