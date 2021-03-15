const router = require("express").Router();
const ctrl = require("../Controllers/profile.controllers")

router.get("/", (req, res) => {
    console.log("Redirected to profile page");
});

module.exports = router;