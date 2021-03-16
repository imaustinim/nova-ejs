
function show(req, res) {
    const loginStatus = req.isAuthenticated() ? "Logout" : "Login";
    if (req.isAuthenticated()) {
        res.render("profile/index", {
            title: "Profile Page",
            loginStatus: loginStatus,
        });        
    } else {
        res.redirect("/auth/login");
    }
}

module.exports = {
    show
  };