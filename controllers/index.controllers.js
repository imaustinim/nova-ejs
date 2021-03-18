const ProjectsModel = require("../models/Projects.model");

async function show(req, res) {
    const loginStatus = req.isAuthenticated() ? "Logout" : "Login";
    const projects = await ProjectsModel.find();
    res.render("projects/index", {
        title: "Projects Page",
        loginStatus: loginStatus,
        projects: projects
    });
}

module.exports = {
    show
  };