const router = require("express").Router();
const profileCtrl= require("../Controllers/profile.controllers")

router.get("/", (req, res) => {
    console.log("Redirected to profile page");
});

module.exports = router;