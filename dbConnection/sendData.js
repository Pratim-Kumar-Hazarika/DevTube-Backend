const videoData = require("../videoData/video.data")
const { Video } = require("../models/videos.model")

async function sendDataToDataBase(){
    try{
        videoData.forEach(async(video)=>{
            const newVideo = new Video(video)
            const saveVideo = await newVideo.save()
            console.log("Video Saved to database..")
        })
    }catch{
        console.log("Videos not saved to database")
    }
}

module.exports = { sendDataToDataBase }