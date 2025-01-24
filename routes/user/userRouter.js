import express from 'express';
import passport from 'passport';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { register, login, remove, modify, findId, adminLogin, updatePicture } from '../../controller/user/userController.js';

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
const uploadFolder = "uploads/profiles"
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
      done(null, path.join(__dirname, "../../uploads/profiles")) // 이미지 저장 경로 설정
    },
    filename(req, file, done){
      const uniqueFileName = getUniqueFileName(file.originalname, uploadFolder)
      done(null, uniqueFileName) //파일 이름을 설정
    }
  })
})

const uploadMiddleWare = upload.single('picture');


createUploadFolder(path.join(__dirname, "../../uploads/profiles"));


const userRouter = express.Router()

//회원가입
userRouter.post("/register", register)
//로그인
userRouter.post("/login", login)
//회원정보 수정
userRouter.put("/modify", passport.authenticate('jwt', { session: false }), modify)
//회원탈퇴
userRouter.delete("/remove", passport.authenticate('jwt', { session: false }), remove)

//아이디 찾기
userRouter.post("/find-id", findId)

// 관리자 로그인
userRouter.post("/admin/login", adminLogin)



// 프로필 변경
userRouter.post("/picture", passport.authenticate('jwt', { session: false }), uploadMiddleWare ,updatePicture)

export default userRouter