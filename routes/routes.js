const express = require("express");
const router = express.Router();
const { getImagePaths } = require("../controllers/ImagePathController");

router.route("/getImagePaths").get(getImagePaths);

module.exports = router;
