import Upgrade from "../../models/users/upgradeSchema.js";
import path from 'path';

// 등급업 신청
const upgrade = async (req, res) => {
  console.log("req.body", req.body)
  // console.log("req.user", req.user)
  const userId = req.user._id;
  const { intro, area, field, total, career, file } = req.body;
  const foundUser = await Upgrade.findOne({ exportName : userId }).lean();
  // console.log("foundUser", foundUser)

  const uploadFolder = "uploads/upGradeFiles";
  console.log("req.files", req)
  const relativePath = path.join(uploadFolder, req.file.filename).replaceAll("\\", "/")

  if(foundUser){
    return res.status(400).json({
      upgradeSuccess : false,
      message : "이미 등급업 신청이 완료되었습니다"
    })
  }else{

    const createUpgrade = await Upgrade.create({
      exportName : userId,
      intro : intro,
      area : area,
      field : field,
      total : total,
      career : career,
      file : relativePath
    })

    console.log("등급업 작성 완료 정보 : ", createUpgrade)

    return res.status(200).json({
      upgradeSuccess : true,
      message : "등급업 신청이 완료되었습니다",
      createUpgrade : createUpgrade,
      filePath : `/${relativePath}`
    })
  }
}

// 등급업 신청 데이터 불러오기
const upgradeInfo = async (req, res) => {
  // console.log(req.user)
  const { id } = req.params;
  // console.log(req.params)

  try {
    const user = await Upgrade.findOne({ exportName : id });
    
    if (!user) {
      return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
    }

    // 사용자 등급업 관련 정보 반환
    const userInfo = {
      intro: user.intro || '',
      area: user.area || '',
      field: user.field || '',
      total: user.total || '',
      career: user.career || '',
      file: user.file || ''
    };

    return res.status(200).json(userInfo);
  } catch (error) {
    console.error("사용자 정보 조회 중 오류 발생", error);
    return res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }

}

// 등급업 수정
const modifyUpdate = async (req, res) => {
  // console.log("req.user", req.user)
  // console.log("req.body", req.body)
  const { exportName, intro, area, field, total, career, file } = req.body;

  const foundUser = await Upgrade.findOne({ exportName : exportName }).lean();
  const uploadFolder = "uploads/upGradeFiles";
  
  console.log("req.files", req)
  const relativePath = path.join(uploadFolder, req.file.filename).replaceAll("\\", "/")
  // console.log(foundUser)
  // console.log('Export Name:', exportName);

  if (!foundUser) {
    return res.status(400).json({
      modifySuccess: false,
      message: "등급업을 수정할 수 없습니다",
    });
  } else {

    await Upgrade.updateOne(
      { exportName : exportName },  
      { 
        intro : intro, 
        area : area, 
        field : field, 
        total : total, 
        career : career, 
        file : relativePath
      }
    );

    const updatedUpgrade = await Upgrade.findOne({ exportName : exportName }).lean();
    console.log("updatedUpgrade", updatedUpgrade)

    return res.status(200).json({
      modifySuccess: true,
      message: "등급업 정보가 수정되었습니다",
      currentUser: updatedUpgrade,
      filePath : `/${relativePath}`
    });
  }
}


export { upgrade, upgradeInfo, modifyUpdate }