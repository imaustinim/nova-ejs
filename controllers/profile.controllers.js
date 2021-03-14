const projectModel = require("../models/project.model")

function show(req, res) {
    res.render("profile", {
        title: "Profile Page",
    });
}

module.exports = {
    show
  };