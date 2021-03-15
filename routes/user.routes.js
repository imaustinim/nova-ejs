const router = require("express").Router();
const ctrl = require("../controllers/user.controllers");

router.get("/", ctrl.show);

module.exports = router;