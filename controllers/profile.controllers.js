const ProjectsModel = require("../models/Projects.model")

async function show(req, res) {
    if (req.isAuthenticated()) {
        const projects = await ProjectsModel.find({
            "details.authorId" : req.user._id
        });
        res.render("profile/index", {
            title: "Profile Page",
            loginStatus: "Logout",
            projects: projects,
            stylesheet: "/stylesheets/profile/edit.css"
        });        
    } else {
        res.redirect("/auth/login");
    }
}

async function setup(req, res) {
    await console.log(req.user.createdAt)
    if (req.isAuthenticated()) {
        await res.render("profile/setup", {
            title: "Setup Page",
            loginStatus: "Logout",
            user: req.user,
        });        
    } else {
        res.redirect("/auth/login");
    }
}

async function edit(req, res) {
    if (req.isAuthenticated()) {
        const projects = await ProjectsModel.find({
            "details.authorId" : req.user._id
        });
        res.render("profile/index", {
            title: "Profile Page",
            loginStatus: "Logout",
            projects: projects,
            edit: "/stylesheets/profile/edit.css"
        });        
    } else {
        res.redirect("/auth/login");
    }
}

async function addUsername(req, res) {
    if (req.isAuthenticated()) {
        res.render("profile/username", {
            title: "Username Page",
            loginStatus: "Logout",
        });        
    } else {
        res.redirect("/auth/login");
    }
}


module.exports = {
    show,
    setup,
    edit,
  };