const projectModel = require("../models/Project.model")

function show(req, res) {
    const loginStatus = req.isAuthenticated() ? "Logout" : "Login";
    res.render("project", {
        title: "Projects Page",
        loginStatus: loginStatus,
    });
}

module.exports = {
    show
  };