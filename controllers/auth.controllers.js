const passport = require("passport");

function redirect(req, res) {
    if (req.user.username == null) {
        res.redirect("/profile/edit/usernames");
    } else {
        res.redirect("/");
    }
}

function login(req, res) {
    const loginStatus = req.isAuthenticated() ? "Logout" : "Login";
    res.render("auth/login", {
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