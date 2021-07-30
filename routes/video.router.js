const express = require("express");
const router = express.Router();
const VideoController = require("../controllers/video.controller");

router.route("/").get(VideoController.get_all_videos);

module.exports = router;