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

export { applyCreate }