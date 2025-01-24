import express from "express";
import passport from "passport";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import {
  createCommunityPost,
  getAllCommunityPosts,
  getCommunityPostById,
  updateCommunityPost,
  deleteCommunityPost,
  uploadFile,
} from "../controllers/writeController.js";

// __dirname 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 업로드 디렉토리 설정
const uploadFolder = path.join(__dirname, "../../../uploads/communityWrites");
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder, { recursive: true });
}

// Multer 설정
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadFolder);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      const originalName = Buffer.from(file.originalname, "latin1").toString("utf-8");
      cb(null, `${uniqueSuffix}-${originalName}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 파일 크기 제한: 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("이미지 파일만 업로드 가능합니다."));
    }
  },
});

const writeRouter = express.Router();

// 파일 업로드 라우터
writeRouter.post("/upload", upload.single("file"), uploadFile);

// 커뮤니티 글 작성
writeRouter.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  upload.single("file"),
  createCommunityPost
);

// 커뮤니티 글 목록 조회
writeRouter.get("/posts", getAllCommunityPosts);

// 특정 커뮤니티 글 조회
writeRouter.get("/posts/:id", getCommunityPostById);

// 커뮤니티 글 수정
writeRouter.put(
  "/posts/:id",
  passport.authenticate("jwt", { session: false }),
  upload.single("file"),
  updateCommunityPost
);

// 커뮤니티 글 삭제
writeRouter.delete(
  "/posts/:id",
  passport.authenticate("jwt", { session: false }),
  deleteCommunityPost
);

export default writeRouter;
