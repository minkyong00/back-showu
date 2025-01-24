import express from 'express';
import passport from 'passport';
import { upgrade, upgradeInfo, modifyUpdate } from '../../controller/mypage/myUpgradeController.js';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES Modules에서 __dirname 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

// 디렉토리를 생성
const createUploadFolder = (folderPath) => {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
};

// 파일 이름 중복 처리
const uploadFolder = "uploads/upGradeFiles"
const getUniqueFileName = (originalName, uploadFolder) => {
  const ext = path.extname(originalName); //확장자를 추출
  const baseName = path.basename(originalName, ext) //확장자를 제외한 파일 이름
  let uniqueName = originalName; //기본적으로 원본 이미지 저장
  let counter = 1;

  while(fs.existsSync(path.join(uploadFolder, uniqueName))){
    uniqueName = `${baseName}(${counter})${ext}`
    counter++;
  }
  return uniqueName;
}

// Multer 이미지 업로드
const upload = multer({
  storage : multer.diskStorage({
    destination(req, file, done){
      console.log(req.path)
      const uploadPath = path.join(__dirname, "../../uploads/upGradeFiles");
      console.log(`Saving file to: ${uploadPath}`);
      done(null, uploadPath) // 이미지 저장 경로 설정
    },
    filename(req, file, done){
      // 파일 이름을 UTF-8로 변환
      const originalName = Buffer.from(file.originalname, 'latin1').toString('utf8');
      const uniqueFileName = getUniqueFileName(originalName, uploadFolder)
      done(null, uniqueFileName) //파일 이름을 설정
    }
  }),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB 제한
  },
})

const myUpgradeRouter = express.Router();
const upgradeFileUploadMiddleWare = upload.single('file');


createUploadFolder(path.join(__dirname, "../../uploads/upGradeFiles"));

// 등급업 신청
myUpgradeRouter.post("/create", passport.authenticate('jwt', { session : false }), upgradeFileUploadMiddleWare, upgrade)
// 등급업 신청 데이터 불러오기
myUpgradeRouter.get("/create/:id", passport.authenticate('jwt', { session : false }), upgradeInfo)
// 등급업 수정
myUpgradeRouter.put("/modify/:id", upgradeFileUploadMiddleWare, modifyUpdate)

// 등급업 신청 파일 첨부
// myUpgradeRouter.post("/files", passport.authenticate('jwt', { session: false }), uploadMiddleware,  uploadFiles)

export default myUpgradeRouter;