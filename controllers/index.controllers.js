const projectModel = require("../models/project.model")

function show(req, res) {
    res.render("index", {
        title: "Nova Homepage",
    });
}

module.exports = {
    show
  };