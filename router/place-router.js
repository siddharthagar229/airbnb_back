const express = require("express");
const {places, searchfun} = require("../controllers/place-controller");
const router = express.Router();

router.route("/place").get(places);
router.route("/search/:key").get(searchfun)

module.exports = router;