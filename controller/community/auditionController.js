import Audition from "../../models/community/auditionSchema.js"



// 전체 오디션 목록
const getAllAuditions = async (req, res) => {
  try {
    const auditions = await Audition.find({}, "title category description imageUrl"); // 필요한 필드만 선택
    res.status(200).json(auditions);
  } catch (error) {
    console.error("오디션 목록 조회 중 오류 발생:", error);
    res.status(500).json({ message: "오디션 목록 조회 중 오류 발생", error: error.message });
  }
};

// 특정 오디션 정보
// const getAuditionById = async (req, res) => {
//   const { id } = req.params;

//   if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
//     return res.status(400).json({ message: "유효하지 않은 ID 형식입니다." });
//   }

//   try {
//     const audition = await Audition.findById(id, "title category description imageUrl createdAt updatedAt"); // 필요한 필드만 선택
//     if (!audition) {
//       return res.status(404).json({ message: "오디션을 찾을 수 없습니다." });
//     }
//     res.status(200).json(audition);
//   } catch (error) {
//     console.error("오디션 정보 조회 중 오류 발생:", error);
//     res.status(500).json({ message: "오디션 정보 조회 중 오류 발생", error: error.message });
//   }
// };

const getAuditionById = async (req, res) => {
  const { id } = req.params;

  if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ message: "유효하지 않은 ID 형식입니다." });
  }

  try {
    const audition = await Audition.findById(id, "title category description imageUrl createdAt updatedAt");
    if (!audition) {
      return res.status(404).json({ message: "오디션을 찾을 수 없습니다." });
    }

    res.status(200).json(audition); // 데이터를 그대로 반환
  } catch (error) {
    console.error("오디션 정보 조회 중 오류 발생:", error);
    res.status(500).json({ message: "오디션 정보 조회 중 오류 발생", error: error.message });
  }
};


export { getAllAuditions, getAuditionById };
