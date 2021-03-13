const userModel = require("../models/user.model")

function show(req, res) {
    res.render("login", {
        title: "Login Page",
    });
}

module.exports = {
    show
  };