const router = require("express").Router();
const ctrl = require("../Controllers/login.controllers")

router.get("/", ctrl.show);

module.exports = router;