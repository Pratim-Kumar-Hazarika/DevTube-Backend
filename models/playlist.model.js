const mongoose = require("mongoose");

const userPlaylists = mongoose.Schema({
  _id:{
    type :mongoose.Schema.Types.ObjectId,
    ref :"User",
    required:true
  },
  playlists:[
    {
      name:String,
      video:[{type :mongoose.Schema.Types.ObjectId, ref:"Video"}]
    }
  ]
})
const PlayList = mongoose.model("Playlist", userPlaylists);

module.exports = { PlayList }