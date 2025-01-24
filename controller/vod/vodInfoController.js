import vodShowuVideo from "../../models/vod/vodShowuVideo.js";

const getVodId = async (req, res) => {
  const { id } = req.params;

  // 유효한 MongoDB ObjectID인지 확인
  if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
    console.error("유효하지 않은 ID가 요청되었습니다:", id);
    return res.status(400).json({ message: "유효하지 않은 ID 형식입니다." });
  }

  try {
    // 비디오 정보 조회
    const vodinfo = await vodShowuVideo.findById(id);

    // 비디오 정보가 없는 경우
    if (!vodinfo) {
      return res.status(404).json({ message: "영화를 찾을 수 없습니다." });
    }

    res.status(200).json(vodinfo);
  } catch (error) {
    console.error("데이터 조회 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류 발생", error: error.message });
  }
};

// 관심/비관심 처리
const getVodLikes = async (req, res) => {
  const { id } = req.params;

  try {
    const vodinfo = await vodShowuVideo.findById(id);

    if (!vodinfo) {
      return res.status(404).json({ message: "비디오를 찾을 수 없습니다." });
    }

    if (!Array.isArray(vodinfo.likedUsers)) {
      vodinfo.likedUsers = [];
    }
    const isLiked = vodinfo.likedUsers.includes(req.user._id);


    if (isLiked) {
      vodinfo.likedUsers = vodinfo.likedUsers.filter((user) => user.toString() !== req.user._id.toString());
      vodinfo.likes -= 1;
      await vodinfo.save();
      return res.status(200).json({ likes: vodinfo.likes});
    } else {
      vodinfo.likedUsers.push(req.user._id);
      vodinfo.likes += 1;
      await vodinfo.save();
      return res.status(200).json({ likes: vodinfo.likes});
    }
    
  } catch (error) {
    console.error("데이터 조회 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류 발생", error: error.message });
  }
};

const getlikestatus = async (req, res) => {
  const { id } = req.params;

  // 유효한 MongoDB ObjectID인지 확인
  if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
    console.error("유효하지 않은 ID가 요청되었습니다:", id);
    return res.status(400).json({ message: "유효하지 않은 ID 형식입니다." });
  }

  try {

    const vodinfo = await vodShowuVideo.findById(id);

 
    if (!vodinfo) {
      return res.status(404).json({ message: "영화를 찾을 수 없습니다." });
    }

   
    if (!Array.isArray(vodinfo.likedUsers)) {
      vodinfo.likedUsers = [];
    }

    const isLiked = vodinfo.likedUsers.includes(req.user._id);
    return res.status(200).json(isLiked);
  } catch (error) {
    console.error("데이터 조회 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류 발생", error: error.message });
  }
};


export { getVodId, getVodLikes ,getlikestatus};
