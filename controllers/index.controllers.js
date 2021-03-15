const projectModel = require("../models/Project.model")

function show(req, res) {
    res.render("index", {
        title: "Nova Homepage",
    });
}

module.exports = {
    show
  };