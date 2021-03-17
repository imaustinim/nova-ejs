const ProjectsModel = require("../models/Projects.model")

function show(req, res) {
    const loginStatus = req.isAuthenticated() ? "Logout" : "Login";
    res.render("projects/index", {
        title: "Projects Page",
        loginStatus: loginStatus,
    });
}


function showCreateForm(req, res) {
    const loginStatus = req.isAuthenticated() ? "Logout" : "Login";
    if (req.isAuthenticated()) {
        res.render("projects/create", {
            title: "New Project",
            loginStatus: loginStatus,
        });
    } else {
        res.redirect("/auth/login");
    }
}

async function submitCreateForm(req, res) {
    console.log();
    if (!req.isAuthenticated()) res.redirect("/auth/login");
    const loginStatus = req.isAuthenticated() ? "Logout" : "Login";
    const project = await ProjectsModel.create({
        details: {
            projectName: req.body.projectName,
            projectType: req.body.projectType,
            authorName: req.body.authorName,
            authorId: req.user._id,
            description: req.body.description,
            visibility: req.body.status,
            genres: req.body.genres.replace(/\s/g, '').split(","),
            releaseDate: req.body.releaseDate
        },
        contract: {
            capitalRequired: req.body.capitalRequired,
            capitalRaised: 0,
            returnrate: req.body.returnRate,
        },
        // socialMedia: {

        // }        
    })
    
    res.redirect(`/projects/${project._id}`);
            // title: "New Project",
            // loginStatus: loginStatus,
}

module.exports = {
    show,
    showCreateForm,
    submitCreateForm
  };