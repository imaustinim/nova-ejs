const passport = require("passport");
const User = require("../models/User.model")

function redirect(req, res) {
    res.redirect("/");
}

function login(req, res) {
    const loginStatus = req.isAuthenticated() ? "Logout" : "Login";
    res.render("login", {
        title: "Login Page",
        loginStatus: loginStatus,
    });
}

function logout(req, res) {
    req.logout();
    res.redirect("/")
}

function ensureAuth(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/");
    }
}

module.exports = {
    redirect,
    login,
    logout,
    ensureAuth,
  };