const router = require("express").Router();
const passport = require("passport");
const ctrl = require("../Controllers/auth.controllers")

router.get("/google", ctrl.google);
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/"}), ctrl.redirect);


module.exports = router;