import Upgrade from "../../models/users/upgradeSchema.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import User from "../../models/users/userSchema.js";

// ES Modules에서 __dirname 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

// 등급업 신청 내역 불러오기
const UpgradeAllData = async (req, res) => {

  try {
    // const upgrades = await Upgrade.find({}).sort({ createdAt : -1 });

    const foundUser = await Upgrade.find({}).populate('exportName').lean();    
    // console.log("foundUser", foundUser)

    res.status(200).json({
      message : "성공적으로 등급업 신청 내역을 가져왔습니다.",
      upgrades : foundUser
    })
    
  } catch (error) {
    console.log("UpgradeAllDataError", error)
    res.status(500).json({message : "서버 오류, 데이터를 가져 올 수 없습니다."})
    
  }
}

const getUgradeDetail = async (req, res) => {

  try {
    const { id } = req.params; 
    const foundUpgrade = await Upgrade.findById(id).populate("exportName");
    // console.log("foundUpgrade", foundUpgrade) 

    if (!foundUpgrade) {
      return res.status(404).json({ message: "등급업 정보를 찾을 수 없습니다." });
    }

    res.status(200).json({
      upgrade: foundUpgrade,
      file: `http://localhost:8000/${foundUpgrade.file}`, // 파일 URL 반환
    });

  } catch (error) {

    console.error("관리자 등급업 상세 페이지 오류 :", error);
    res.status(500).json({ message: "서버 에러" });
  }
}

// 포트폴리오 다운로드
const downloadFile = async (req, res) => {
  const fileName = req.params.fileName;
  console.log('요청된 파일명:', fileName);
  const filePath = path.resolve('uploads', 'upGradeFiles', fileName);
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

// 등급업 승인
const requestStatusExport = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "userId가 제공되지 않았습니다." });
    }

    const user = await Upgrade.findOne({ 'exportName': userId }).populate('exportName').lean();
    console.log("user", user);

    if (!user) {
      return res.status(404).json({ message: "유저를 찾을 수 없습니다." });
    }

    // 유저 상태 업데이트
    await User.updateOne(
      { _id: user.exportName._id },
      {
        role: "export",
        isUpgradeRequested: true,
        upgradeRequestStatus: "승인"
      }
    );

    // 갱신된 사용자 정보 반환
    // const updatedUser = await User.findById(user.exportName._id);  // 최신 데이터 조회
    res.status(200).json({
      message: "등급업 승인이 완료되었습니다.",
      user: user  // 변경된 상태의 유저 데이터 응답
    });

  } catch (error) {
    console.log("requestStatusExportError", error);
    res.status(500).json({ message: "서버 오류, 데이터를 가져 올 수 없습니다." });
  }
};

// 등급업 거절
const requestStatusReject = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "userId가 제공되지 않았습니다." });
    }

    const user = await Upgrade.findOne({ 'exportName': userId }).populate('exportName').lean();
    console.log("user", user);

    if (!user) {
      return res.status(404).json({ message: "유저를 찾을 수 없습니다." });
    }

    // 유저 상태 업데이트
    await User.updateOne(
      { _id: user.exportName._id },
      {
        role: "user",
        isUpgradeRequested: false,
        upgradeRequestStatus: "거절"
      }
    );

    // 갱신된 사용자 정보 반환
    // const updatedUser = await User.findById(user.exportName._id);  // 최신 데이터 조회
    res.status(200).json({
      message: "등급업 승인이 거절되었습니다.",
      user: user  // 변경된 상태의 유저 데이터 응답
    });

  } catch (error) {
    console.log("requestStatusRejectError", error);
    res.status(500).json({ message: "서버 오류, 데이터를 가져 올 수 없습니다." });
  }
};


export { UpgradeAllData, getUgradeDetail, downloadFile, requestStatusExport, requestStatusReject }