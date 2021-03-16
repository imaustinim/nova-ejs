const mongoose = require("mongoose")

function show(req, res) {
    const loginStatus = req.isAuthenticated() ? "Logout" : "Login";
    res.render("index/index", {
        title: "Nova Homepage",
        loginStatus: loginStatus,
    });
}

module.exports = {
    show
  };