require("express");
const userModel = require("../models/user.model")

function show(req, res) {
    res.render("user", {
        title: "Nova Userpage",
    });
}

module.exports = {
    show
  };