const router = require("express").Router();
const ctrl = require("../Controllers/project.controllers")

router.get("/", ctrl.show);

module.exports = router;