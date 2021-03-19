const router = require("express").Router();
const notificationsCtrl = require("../Controllers/notifications.controllers")

router.get("/", notificationsCtrl.show);

module.exports = router;