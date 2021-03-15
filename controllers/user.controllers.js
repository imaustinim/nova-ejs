const userModel = require("../models/User.model")

function show(req, res) {
    res.render("user", {
        title: "Nova Userpage",
    });
}

module.exports = {
    show
  };