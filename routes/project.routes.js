const router = require("express").Router();
const ctrl = require("../Controllers/project.controllers")

router.get("/", (req, res) => {
    console.log("Redirected to projects page");
});

module.exports = router;