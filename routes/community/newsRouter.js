import express from 'express';
import passport from "passport";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { createNews, getAllNews, getNewsById, editNews } from '../../controller/community/newsController.js';

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
const uploadFolder = "uploads/community/news"
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
      const uploadPath = path.join(__dirname, "../../uploads/community/news");
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
    fileSize: 5 * 1024 * 1024, // 5MB 제한
  },
})


const newsRouter = express.Router();
const newsFileUploadMiddleWare = upload.single('file');

createUploadFolder(path.join(__dirname, "../../uploads/community/news"));


// 뉴스 전체 목록 조회
newsRouter.get("/", getAllNews);

// 특정 뉴스 조회 '/community/newsMain/:id'
newsRouter.get("/:id", getNewsById);

// 제보하기 작성 '/community/newsMain/create'
newsRouter.post("/create", passport.authenticate("jwt", { session: false }), newsFileUploadMiddleWare, createNews)

// 제보하기 수정 '/community/newsMain/edit/:id'
newsRouter.put("/edit/:id", passport.authenticate("jwt", { session: false }), newsFileUploadMiddleWare, editNews)


export default newsRouter;