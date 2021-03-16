const router = require("express").Router();
const profileCtrl = require("../Controllers/profile.controllers")


router.get("/", profileCtrl.show);

module.exports = router;