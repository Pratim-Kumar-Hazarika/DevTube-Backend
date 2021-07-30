const { PlayList } = require("../models/playlist.model");

exports.get_user_playlists = async(req,res)=>{
    try {
        const {userId} = req.params;
        const getUserPlaylists = await PlayList.findById(userId).select("playlists").populate("playlists.video")
        res.json({message:"user videos are",getUserPlaylists})
    } catch (error) {
        res.status(500).json({errorMessage:"error while getting user playlists"})
    }
  }

  exports.add_playlist_to_user = async(req,res)=>{
      try {
          const {userId} = req.params;
          const {name} = req.body;
          const user= await PlayList.findById(userId);
          if(user === null){
            const NewPlaylist = new PlayList({
                _id :userId,
                playlists:[
                    {
                        name : name,
                        video :[]
                    }
                ]
            })
            await NewPlaylist.save()
            return  res.json({message:"Playlist created successfully"})
          }

          const getPlaylist = user.playlists.find(playlist=>playlist.name == name)
          if(getPlaylist){
              return res.status(500).json({errorMessage:"Playlist with the same name cannot be created use a different name"})
          }else{
            await PlayList.updateOne({"_id":userId},{
                "$addToSet":{
                  "playlists":{
                      "name":name,
                      "video":[]
                  }
                }
              })
              return res.json({message:"Playlist created successfully"})
          }
      } catch (error) {
         res.status(500).json({errorMessage:"Playlist could not be created"})
      }
  }

  exports.delete_playlist_of_user = async(req,res)=>{
      try {
          const {userId} = req.params;
          const {name} = req.body
          await PlayList.updateOne({"_id":userId},
          {"$pull":
             {"playlists":
                {"name":name}
            }})
          return res.json({message:"playlist deleted.."})
      } catch (error) {
          res.status(500).json({errorMessage:"Playlist was not deleted"})
      }

  }