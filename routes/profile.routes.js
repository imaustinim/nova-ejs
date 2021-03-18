const router = require("express").Router();
const profileCtrl = require("../Controllers/profile.controllers")


router.get("/", profileCtrl.show);
router.get("/setup", profileCtrl.setup);
router.post("/setup/submit", profileCtrl.setupSubmit);

router.get("/edit", profileCtrl.edit);

module.exports = router;