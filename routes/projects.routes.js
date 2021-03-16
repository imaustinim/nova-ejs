const router = require("express").Router();
const projectsCtrl = require("../Controllers/projects.controllers")

router.get("/", projectsCtrl.show);
router.get("/create", projectsCtrl.showCreateForm);
router.post("/submit", projectsCtrl.submitCreateForm);


module.exports = router;