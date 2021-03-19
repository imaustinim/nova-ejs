const UserModel = require("../models/User.model")
const ProjectsModel = require("../models/Projects.model")

async function show(req, res) {
    const loginStatus = req.isAuthenticated() ? "Logout" : "Login";
    const users = await UserModel.find();
    res.render("users/index", {
        title: "Users Page",
        loginStatus: loginStatus,
        users: users,
        user: req.user,
    });
}

async function showUser(req, res) {
    let loginStatus = "Login"
    let stylesheet = "/stylesheets/hidden.css";
    const projects = await ProjectsModel.find({
        "details.authorId" : req.params.id
    });
    
    const user = await UserModel.findById(req.params.id);
    if (req.isAuthenticated()) {
        loginStatus = "Logout";
        if (user._id.toString() == req.user._id.toString()) {
            stylesheet = "/stylesheets/users/edit.css";
        }
    }

    res.render("users/user", {
        stylesheet: stylesheet,
        loginStatus: loginStatus,
        title: user.details.displayName,
        projects: projects,
        user: user,
    })
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


async function showEdit(req, res) {
    if (req.isAuthenticated()) {
        res.render("users/edit", {
            title: "Edit Profile",
            loginStatus: "Logout",
            user: req.user,
        })
    }
}

async function submitEdit(req, res) {
    if (req.isAuthenticated()) {
        const user = await UserModel.findByIdAndUpdate(req.user._id,{
            details: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                username: req.body.username,
                displayName: req.body.displayName,
                position: req.body.position,
                genres: req.body.genres.split(",").map(s => s.trim()),
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
        res.redirect(`/users/${user._id}`);
    } else {
        res.redirect("/auth/login");
    }
}

module.exports = {
    show,
    showUser,
    showEdit,
    submitEdit,
  };