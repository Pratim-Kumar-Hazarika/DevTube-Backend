const mongoose = require("mongoose");

const userLikedVideos = mongoose.Schema({
  _id:{
    type :mongoose.Schema.Types.ObjectId,
    ref :"User",
    required:true
  },
  likedVideos :[{
    type :mongoose.Schema.Types.ObjectId,
    ref :"Video"
  }]
})
const LikedVideos = mongoose.model("LikedVideo", userLikedVideos);

module.exports = { LikedVideos }