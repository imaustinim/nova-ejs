const userModel = require("../models/User.model")

function show(req, res) {
    const loginStatus = req.isAuthenticated() ? "Logout" : "Login";
    res.render("user", {
        title: "Nova Userpage",
        loginStatus: loginStatus,
    });
}

module.exports = {
    show
  };