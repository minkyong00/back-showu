import TeamApply from "../../models/showu/teamApplySchema.js";
import TeamMatching from "../../models/showu/teamMatchingSchema.js";
import Upgrade from "../../models/users/upgradeSchema.js";
import path from 'path';

const applyCreate = async (req, res) => {
  const userId = req.user._id;
  const { id } = req.params;
  console.log("id", id)
  const { intro, portfilo } = req.body;

  const foundTeam = await TeamMatching.findOne({ _id : id }).lean();
  const foundUpgrade = await Upgrade.findOne({ exportName : userId }).lean();

  const existingApply = await TeamApply.findOne({ teamId : id, applyId: userId }).lean();
  console.log("existingApply", existingApply)

  if(existingApply){
    return res.status(400).json({ message : "이미 이 팀에 지원하셨습니다."})
  }

  if(!foundUpgrade){
    return res.status(400).json({ message : "등급업 신청 후 팀에 지원이 가능합니다"})
  }

  // console.log("foundUser", foundUser)
  // console.log("foundTeam", foundTeam)
  // console.log("foundUpgrade", foundUpgrade)

  const uploadFolder = "uploads/showu/apply";
  console.log("req.files", req.file)
  const relativePath = path.join(uploadFolder, req.file.filename).replaceAll("\\", "/");
  console.log("relativePath", relativePath)

  const createApply = await TeamApply.create({
    teamId : id,
    applyId : userId,
    upgradeId : foundUpgrade._id,
    teamName : foundTeam.teamName,
    intro : intro,
    career : foundUpgrade.career,
    portfilo : relativePath
  })

  console.log("createApply", createApply)

  res.status(200).json({
    createApplySuccess : true,
    message : "팀 지원이 완료되었습니다",
    createApplyList : createApply,
    filePath : relativePath
  })
}

const removeApply = async (req, res) => {
  const { applyId } = req.params;
  console.log("applyId", applyId)
  const userId = req.user._id; 
  console.log("userId", userId)

    try {
        const team = await TeamApply.findOne({ _id: applyId, applyId: userId });
        console.log("team", team)
        if (!team) {
        return res.status(404).json({ success: false, message: "팀 지원 내역을 찾을 수 없거나 삭제 권한이 없습니다." });
        }

        await TeamMatching.deleteOne({ _id: applyId });
        return res.status(200).json({ success: true, message: "팀 내역이 성공적으로 삭제되었습니다." });
    } catch (error) {
        console.error("팀 매칭 삭제 중 오류:", error);
        return res.status(500).json({ success: false, message: "서버 오류로 인해 삭제에 실패했습니다." });
    }
}

export { applyCreate, removeApply }