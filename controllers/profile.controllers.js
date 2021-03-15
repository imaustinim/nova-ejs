const projectModel = require("../models/Project.model")

function show(req, res) {
    const loginStatus = req.isAuthenticated() ? "Logout" : "Login";
    res.render("profile/index", {
        title: "Profile Page",
        loginStatus: loginStatus,
    });
}

module.exports = {
    show
  };