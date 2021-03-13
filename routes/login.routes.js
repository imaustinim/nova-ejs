const router = require("express").Router();
const loginCtrl= require("../Controllers/login.controllers")

router.get("/", loginCtrl.show);

module.exports = router;