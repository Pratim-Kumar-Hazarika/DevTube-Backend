const { Video } = require("../models/videos.model");

exports.get_all_videos = async(req,res)=>{
    try{
    const videos = await Video.find({});
    res.json({success:true, message:"Videos are..", videos})
    }catch(error){
      res.status(500).json({success:false, message:"Videos Not Found.."})
    }
  }