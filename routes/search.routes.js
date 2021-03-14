const router = require("express").Router();
const searchCtrl= require("../Controllers/search.controllers")

router.post("/", searchCtrl.search);


module.exports = router;