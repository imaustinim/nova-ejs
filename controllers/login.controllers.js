const userModel = require("../models/User.model")

function show(req, res) {
    res.render("login", {
        title: "Login Page",
    });
}

module.exports = {
    show
  };