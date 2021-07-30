const {HistoryVideo} = require("../models/history.model");

exports.get_user_history_videos = async(req,res)=>{
    try {
       const {userId} = req.params;
        const getUserVideos = await HistoryVideo.findById(userId).populate("historyVideos") 
        res.json({message:"user videos are",getUserVideos})
    } catch (error) {
        res.status(500).json({errorMessage:"error while getting user videos"})
    }
  }

  exports.add_video_to_user_history =  async(req,res)=>{
    try {
      const {userId} = req.params;
      const userHistoryVideos = await HistoryVideo.findById(userId);
      if(userHistoryVideos === null){
        const AddVideoToHistory = new HistoryVideo({
          _id : userId,
          historyVideos:[req.body]
        })
        await AddVideoToHistory.save()
        return res.json({success:true,message:"Video added sucessfully to history"})
      }
      await HistoryVideo.updateOne({"_id":userId},{
        "$addToSet":{
          "historyVideos":req.body._id
        }
      })
      return res.json({success:true,message:"Video added sucessfully to history"})
      
    } catch (error) {
      res.json({ errorMessage: "video not added to history" })
    }
  }

  exports.delete_videos_from_user_history = async (req, res) => {
    try {
      const { userId } = req.params;
      const deleteVideo = await HistoryVideo.findById(userId)
      await deleteVideo.historyVideos.remove(req.body._id);
      await deleteVideo.save()
      res.json({ sucess: true, message: "Video removed successfully from user history" })
    }catch{
      res.status(500).json({errorMessage:"Video not removed"})
    }
  }