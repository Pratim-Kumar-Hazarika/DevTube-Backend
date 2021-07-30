const mongoose = require("mongoose");

const userHistoryVideos = mongoose.Schema({
  _id:{
    type :mongoose.Schema.Types.ObjectId,
    ref :"User",
    required:true
  },
  historyVideos :[{
    type :mongoose.Schema.Types.ObjectId,
    ref :"Video"
  }]
})
const HistoryVideo = mongoose.model("HistoryVideo", userHistoryVideos);

module.exports = { HistoryVideo }