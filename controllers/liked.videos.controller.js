const {LikedVideos} = require("../models/likedVideo.model");

exports.get_user_liked_videos = async(req,res)=>{
    try {
      const {userId} = req.params;
        const getUserVideos = await LikedVideos.findById(userId).populate("likedVideos")
        res.json({message:"user videos are",getUserVideos})
    } catch (error) {
        res.status(500).json({errorMessage:"error while getting user videos"})
    }
  }

  exports.add_video_to_user_liked =  async(req,res)=>{
    try {
      const {userId} = req.params;
      const userLikedVideos = await LikedVideos.findById(userId);
      if(userLikedVideos === null){
        const AddVideoToLiked = new LikedVideos({
          _id : userId,
          likedVideos:[req.body]
        })
        await AddVideoToLiked.save()
        return res.json({success:true,message:"Video added sucessfully to liked videos"})
      }
      await LikedVideos.updateOne({"_id":userId},{
        "$addToSet":{
          "likedVideos":req.body._id
        }
      })
      return res.json({success:true,message:"Video added sucessfully to liked videos"})
      
    } catch (error) {
      res.json({ errorMessage: "video not added to liked videos" })
    }
  }

  exports.delete_videos_from_user_liked = async (req, res) => {
    try {
      const { userId } = req.params;
      const deleteVideo = await LikedVideos.findById(userId)
      await deleteVideo.likedVideos.remove(req.body._id);
      await deleteVideo.save()
      res.json({ sucess: true, message: "Video removed successfully from user liked videos model" })
    }catch{
      res.status(500).json({errorMessage:"Video not removed"})
    }
  }