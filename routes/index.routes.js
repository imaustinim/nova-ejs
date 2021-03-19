const router = require("express").Router();
const ctrl = require("../Controllers/index.controllers")

router.get("/", ctrl.show);

module.exports = router;