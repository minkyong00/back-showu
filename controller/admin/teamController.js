import TeamMatching from "../../models/showu/teamMatchingSchema.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES Modules에서 __dirname 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


const teamAllData = async (req, res) => {
  try {
    const foundTeam = await TeamMatching.find({})
      .populate('teamLeader')
      .lean();    
    console.log("foundTeam", foundTeam)

    res.status(200).json({
      message : "성공적으로 팀 개설 신청 내역을 가져왔습니다.",
      Teams : foundTeam
    })
    
  } catch (error) {
    console.log("TeamAllDataError", error)
    res.status(500).json({message : "서버 오류, 데이터를 가져 올 수 없습니다."})
    
  }
}

const getTeamById = async (req, res) => {
  try {
    const { id } = req.params; 
    const foundTeam = await TeamMatching.findById(id)
      .populate("teamLeader").lean();
    console.log("foundTeam", foundTeam) 

    if (!foundTeam) {
      return res.status(404).json({ message: "팀 정보를 찾을 수 없습니다." });
    }

    res.status(200).json({
      team: foundTeam,
      file: `http://localhost:8000/${foundTeam.file}`,
    });

  } catch (error) {

    console.error("관리자 팀 매칭 상세 페이지 오류 :", error);
    res.status(500).json({ message: "서버 에러" });
  }
}

const downloadTeamFile = async (req, res) => {
  const fileName = req.params.fileName;
  console.log('요청된 파일명:', fileName);
  const filePath = path.resolve('uploads', 'showu', 'create', fileName);
  console.log('파일 경로:', filePath); 

  // 파일이 존재하는지 확인
  if (!fs.existsSync(filePath)) {
    return res.status(404).send('파일을 찾을 수 없습니다');
  }
  
  res.download(filePath, fileName, (err) => {
    if (err) {
      console.error('파일 다운로드 에러:', err);
      res.status(500).send('파일 다운로드 실패');
    }
  });
}

const requestStatusComplete = async (req, res) => {
  try {
    const { teamId } = req.body;

    if (!teamId) {
      return res.status(400).json({ message: "teamId 제공되지 않았습니다." });
    }

    const team = await TeamMatching.findOne({ _id: teamId }).populate('teamLeader').lean();
    console.log("team", team);

    if (!team) {
      return res.status(404).json({ message: "팀을 찾을 수 없습니다." });
    }

    // 유저 상태 업데이트
    await TeamMatching.updateOne(
      { _id: team._id },
      {
        status: "매칭 완료"
      }
    );

    res.status(200).json({
      message: "팀 개설 승인이 완료되었습니다.",
      team: team  
    });

  } catch (error) {
    console.log("requestStatusCompleteError", error);
    res.status(500).json({ message: "서버 오류, 데이터를 가져 올 수 없습니다." });
  }
}

const requestStatusReject = async (req, res) => {
  try {
    const { teamId } = req.body;

    if (!teamId) {
      return res.status(400).json({ message: "teamId 제공되지 않았습니다." });
    }

    const team = await TeamMatching.findOne({ _id : teamId })
      .populate('teamLeader').lean();
    console.log("team", team);

    if (!team) {
      return res.status(404).json({ message: "유저를 찾을 수 없습니다." });
    }

    // 유저 상태 업데이트
    await TeamMatching.updateOne(
      { _id: teamId },
      {
        status : "매칭 거절"
      }
    );

    res.status(200).json({
      message: "팀 개설이 거절되었습니다.",
      team: team  
    });

  } catch (error) {
    console.log("requestStatusRejectError", error);
    res.status(500).json({ message: "서버 오류, 데이터를 가져 올 수 없습니다." });
  }
}

export { teamAllData, getTeamById, downloadTeamFile, requestStatusComplete, requestStatusReject }