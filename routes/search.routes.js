const router = require("express").Router();
const ctrl = require("../Controllers/search.controllers")

router.post("/",  ctrl.search);


module.exports = router;