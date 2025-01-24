import express from 'express';
import passport from 'passport';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getTeamDetail, getTeamList, teamCreate, teamPortfiloDownLoad, addTeamLike, getTeamLike, teamModify, getTeamDatas } from '../../controller/showu/teamController.js';
import applyRouter from './applyRouter.js';


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
const uploadFolder = "uploads/team/create"
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
      const uploadPath = path.join(__dirname, "../../uploads/showu/create");
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

const teamRouter = express.Router();
// const TeamFileUploadMiddleWare = upload.single('file');
const TeamFileUploadMiddleWare = upload.fields([
  { name : "file", maxCount : 1 }, //포트폴리오
  { name : "teamProfile", maxCount : 1}, //팀 프로필 이미지
]);

createUploadFolder(path.join(__dirname, "../../uploads/showu/create"));

// 팀 매칭 메인 데이터 "/showu/team"
teamRouter.get("/", getTeamList)

// 팀 매칭 상세 페이지 '/showu/team/detail/:id
teamRouter.get("/detail/:id", getTeamDetail)

// 팀 매칭 팀 개설 페이지 '/showu/team/create'
teamRouter.post("/create", passport.authenticate('jwt', { session : false }), TeamFileUploadMiddleWare, teamCreate)

// 팀 매칭 수정 페이지 '/showu/team/modify/:id'
teamRouter.put("/modify/:id", passport.authenticate('jwt', { session : false }), TeamFileUploadMiddleWare, teamModify)

// 팀 매칭 정보 불러오기 '/showu/team/create/:id'
teamRouter.get("/create/:id", passport.authenticate('jwt', { session : false }), getTeamDatas)

// 팀 매칭 지원 라우터
teamRouter.use("/apply", applyRouter)

// 팀 매칭 상세 페이지 포트폴리오 다운로드 '/showu/team/down-file/:fileName'
teamRouter.get("/down-file/:fileName", teamPortfiloDownLoad)

// 팀 매칭 좋아요 '/showu/team/add-like/:teamId'
teamRouter.post("/add-like/:teamId", passport.authenticate('jwt', { session : false }), addTeamLike)

// 팀 매칭 조회 '/showu/team/like/:teamId'
teamRouter.get("/like/:teamId", passport.authenticate('jwt', { session : false }), getTeamLike)

export default teamRouter;