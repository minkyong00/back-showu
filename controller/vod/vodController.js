
import vodShowuVideo from '../../models/vod/vodShowuVideo.js';
import ShowuVideo from '../../models/vod/showuVideoSchema.js'

const getAllVideo = async (req, res) => {
    try {
        const vods = await vodShowuVideo.find(); 
        console.log(vods)
    res.status(200).json(vods);
  } catch (error) {
    res.status(500).json({ message: "서버 오류", error: error.message });
  }
};

// showu비디오 만 가져오기 모두
const getShowuVideo = async(req,res)=>{
  try{
    const vods = await ShowuVideo.find();
    console.log(vods)
    res.status(200).json(vods);
  }catch(error){
    res.status(500).json({message : "서버 오류",error:error.message})
  }
}






export {getAllVideo,getShowuVideo} ;