const userModel = require("../models/User.model")

async function show(req, res) {
    const loginStatus = req.isAuthenticated() ? "Logout" : "Login";
    const artists = await userModel.find();
    res.render("artists/index", {
        title: "Artists Page",
        loginStatus: loginStatus,
        artists: artists
    });
}

module.exports = {
    show
  };