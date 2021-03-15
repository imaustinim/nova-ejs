const passport = require("passport");
const User = require("../models/User.model")

function redirect(req, res) {
    res.redirect("/");
}

function google(req, res) {
    passport.authenticate("google", { scope : ["profile"] })
}

function googleCallback(req, res) {
    passport.authenticate("google", { failureRedirect: "/"})
}

module.exports = {
    redirect,
    google,
  };