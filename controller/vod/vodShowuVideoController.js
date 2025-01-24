import ShowuVideo from '../../models/vod/showuVideoSchema.js'




const getShowuVodId = async (req, res) => {
  const { id } = req.params;

  if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
    console.error("유효하지 않은 ID가 요청되었습니다:", id);
    return res.status(400).json({ message: "유효하지 않은 ID 형식입니다." });
  }

  try {
    const vodinfo = await ShowuVideo.findById(id);

    if (!vodinfo) {
      return res.status(404).json({ message: "영상를 찾을 수 없습니다." });
    }

    res.status(200).json(vodinfo);
  } catch (error) {
    console.error("데이터 조회 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류 발생", error: error.message });
  }
};

const uploadName = async (req, res) => {
  const { id } = req.params;

  if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
    console.error("유효하지 않은 ID가 요청되었습니다:", id);
    return res.status(400).json({ message: "유효하지 않은 ID 형식입니다." });
  }

  try {
    // ShowuVideo에서 uploaduser를 populate하여 업로더 정보도 함께 가져오기
    const vodinfo = await ShowuVideo.findById(id).populate('uploaduser', 'name');

    if (!vodinfo) {
      return res.status(404).json({ message: "영상을 찾을 수 없습니다." });
    }

    // 업로더 이름을 uploadname에 저장
    const uploadname = vodinfo.uploaduser ? vodinfo.uploaduser.name : null;

    if (!uploadname) {
      console.error("업로더 이름을 찾을 수 없습니다.");
      return res.status(500).json({ message: "업로더 이름을 가져오는데 실패했습니다." });
    }
    console.log(uploadName)

    // 업로더 이름을 응답으로 반환
    res.status(200).json({ uploadname });
  } catch (error) {
    console.error("데이터 조회 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류 발생", error: error.message });
  }
};





export  {getShowuVodId,uploadName}