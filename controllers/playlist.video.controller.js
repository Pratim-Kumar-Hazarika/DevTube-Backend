const {PlayList} = require("../models/playlist.model");

exports.add_video_to_user_playlist = async(req, res) => {
    try {
        const {decodedValues} = req.user;
        const {name} = req.body;
        const {videoId} = req.body;
        await PlayList.updateOne({
            "_id": decodedValues.userId,
            "playlists.name": name
        }, {
            "$addToSet": {
                "playlists.$.video": videoId
            }
        })
        res.json({message: "Video added to playlist"})
    } catch (error) {
        res.status(500).json({errorMessage: "video not added to playlist"})
    }
}

exports.delete_video_from_user_playlist = async(req, res) => {
    try {
        const {decodedValues} = req.user;
        const {name} = req.body;
        const {videoId} = req.body;
        await PlayList.updateOne({
            "_id": decodedValues.userId,
            "playlists.name": name
        }, {
            "$pull": {
                "playlists.$.video": videoId
            }
        });
        res.json({success: true, message: "video deleted from playlist.."})
    } catch (error) {
        res.status(500).json({errorMessage: "video not deleted from playlist"})
    }
    
}