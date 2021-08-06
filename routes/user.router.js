const express = require('express');
const router = express.Router();
const UserController = require("../controllers/user.controller");
const HistoryVideosController = require("../controllers/history.videos.controller");
const LikedVideosController = require("../controllers/liked.videos.controller");
const PlaylistController = require("../controllers/playlist.controller");
const PlaylistVideoController = require("../controllers/playlist.video.controller");
const {userLogger} = require("../middlewares/authHandler")

router.route("/")
.get(UserController.get_all_users)
.post(UserController.add_user)

router.route("/login")
.post(UserController.user_login)

router.use(userLogger)

router.route("/token")
.get(UserController.send_user_id)

router.route("/:userId/history/video")
.get(HistoryVideosController.get_user_history_videos)
.post(HistoryVideosController.add_video_to_user_history)

router.route("/:userId/history/video/delete")
.post(HistoryVideosController.delete_videos_from_user_history)

router.route("/:userId/liked/video")
.get(LikedVideosController.get_user_liked_videos)
.post(LikedVideosController.add_video_to_user_liked)

router.route("/:userId/liked/video/delete")
.post(LikedVideosController.delete_videos_from_user_liked)

router.route("/:userId/playlists")
.get(PlaylistController.get_user_playlists)
.post(PlaylistController.add_playlist_to_user)
router.route("/:userId/playlists/delete")
.post(PlaylistController.delete_playlist_of_user)

router.route("/:userId/playlists/video")
.post(PlaylistVideoController.add_video_to_user_playlist)

router.route("/:userId/playlists/video/delete")
.post(PlaylistVideoController.delete_video_from_user_playlist)

module.exports = router;