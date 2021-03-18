const ProjectsModel = require("../models/Projects.model");
const UserModel = require("../models/User.model");
const SocialMediaSchema = require("../models/schemas/socialmedia.model")


async function show(req, res) {
    if (req.isAuthenticated()) {
        const projects = await ProjectsModel.find({
            "details.authorId" : req.user._id
        });
        res.render("profile/index", {
            title: "Profile Page",
            loginStatus: "Logout",
            projects: projects,
            stylesheet: "/stylesheets/profile/edit.css",
            user: req.user,
        });        
    } else {
        res.redirect("/auth/login");
    }
}

async function setup(req, res) {
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

async function setupSubmit(req, res) {
    if (req.isAuthenticated()) {
        const user = await UserModel.findByIdAndUpdate(req.user._id,{
            details: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                username: req.body.username,
                displayName: req.body.displayName,
                position: req.body.position,
                genres: req.body.genres.replace("/,\s/g", ',').split(","),
                location: req.body.location,
                birthDate: req.body.birthdDate,
                bio: req.body.bio,
            },
            socialMedia: {
                twitter: req.body.twitter,
                instagram: req.body.instagram,
                facebook: req.body.facebook,
                youtube: req.body.youtube,
                twitch: req.body.twitch,
                linkedin: req.body.linkedin,
                github: req.body.github,
                personal: req.body.personal
            }
        })
        res.redirect("/")
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

module.exports = {
    show,
    setup,
    setupSubmit,
    edit,
  };