const router = require("express").Router();
const indexCtrl = require("../Controllers/index.controllers")

router.get("/", indexCtrl.show);

module.exports = router;