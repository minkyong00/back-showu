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

const getTeamApply = async (req, res) => {
  const userId = req.user._id;
  try {
    const apply = await TeamApply.find({ applyId : userId })
      .populate("teamId")
      .populate("applyId")
      .populate("upgradeId")
      .lean()
    console.log("apply", apply)

    res.status(200).json({
      applySuccess : true,
      message : "성공적으로 지원한 팀 목록을 가져왔습니다.",
      apply : apply
    })
  } catch (error) {
    res.status(500).json({
      applySuccess : false,
      message : "지원한 팀 목록을 가져오는데 실패했습니다"
    })
    
  }
}

const getDetailApply = async (req, res) => {
  const userId = req.user._id;
  const { id } = req.params;
  try {
    const detailApply = await TeamApply.find({ _id : id, applyId : userId }).lean();
    console.log("detailApply", detailApply)

    res.status(200).json({
      detailApplySuccess : true,
      message : "성공적으로 팀 지원 상세 정보를 가져왔습니다.",
      detailApply : detailApply
    })
  } catch (error) {
    
  }
}

const modifyApply = async (req, res) => {
  const userId = req.user._id;
    console.log("userId", userId)
    const { id } = req.params;
    console.log("id", id)

    const { intro } = req.body;
    
    const foundUser = await TeamApply.findOne({ applyId : userId, _id : id }).lean();
    console.log("foundUser", foundUser)

    const uploadFolder = "uploads/showu/apply";
    const filePaths = {}; // 파일 경로 저장

    if (req.files) {
    if (req.files.file) {
        const portfolioPath = path.join(uploadFolder, req.files.file[0].filename).replaceAll("\\", "/");
        filePaths.file = `/${portfolioPath}`;
    }
    }

    const modifyTeam = await TeamApply.updateOne(
        { applyId : userId, _id : id },
        {
            intro : intro,
            teamProfile : filePaths.teamProfilo || foundUser.teamProfilo,
        }
    )

    console.log("modifyTeam", modifyTeam)

    res.status(200).json({
        modifyTeamSuccess : true,
        message : "팀 수정이 완료되었습니다.",
        modifyTeam : modifyTeam
    })
}

export { applyCreate, removeApply, getTeamApply, getDetailApply, modifyApply }