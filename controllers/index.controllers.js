const mongoose = require("mongoose")
const projectModel = require("../models/Project.model")

function show(req, res) {
    const loginStatus = req.isAuthenticated() ? "Logout" : "Login";
    res.render("index", {
        title: "Nova Homepage",
        loginStatus: loginStatus,
    });
}

module.exports = {
    show
  };