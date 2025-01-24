import express from 'express';
import passport from 'passport';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { applyCreate } from '../../controller/showu/teamApplyController.js';

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
const uploadFolder = "uploads/team/apply"
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
      const uploadPath = path.join(__dirname, "../../uploads/showu/apply");
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

const applyRouter = express.Router();
const TeamApplyFileUploadMiddleWare = upload.single('portfilo');
// const TeamFileUploadMiddleWare = upload.fields([
//   { name : "file", maxCount : 1 }, //포트폴리오
//   { name : "teamProfile", maxCount : 1}, //팀 프로필 이미지
// ]);

createUploadFolder(path.join(__dirname, "../../uploads/showu/apply"));

// 팀 매칭 지원 'showu/team/apply/create/:id'
applyRouter.post("/create/:id", passport.authenticate('jwt', { session : false }), TeamApplyFileUploadMiddleWare, applyCreate)

export default applyRouter;