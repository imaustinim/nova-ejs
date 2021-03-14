const router = require("express").Router();
const projectCtrl= require("../Controllers/project.controllers")

router.get("/", (req, res) => {
    console.log("Redirected to projects page");
});

module.exports = router;