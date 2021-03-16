const router = require("express").Router();
const userCtrl = require("../controllers/user.controllers");

router.get("/", userCtrl.show);

module.exports = router;