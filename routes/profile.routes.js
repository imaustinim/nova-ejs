const router = require("express").Router();
const ctrl = require("../Controllers/profile.controllers")

router.get("/", ctrl.show);

module.exports = router;