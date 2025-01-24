import ShowuVideo from "../../models/vod/showuVideoSchema.js";
import multer from "multer";
import path from "path";
import fs from "fs";

// __dirname 정의 (ES 모듈 환경에서)
const __dirname = path.resolve(path.dirname(new URL(import.meta.url).pathname).substring(1));

// Multer를 이용한 파일 업로드 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath;

    if (file.fieldname === "thumbnail") {
      uploadPath = path.join(__dirname,"../../", "uploads", "images", "thumbnail");
    } else if (file.fieldname === "video") {
      uploadPath = path.join(__dirname,"../../", "uploads", "video");
    } else {
      cb(new Error(`지원하지 않는 파일 형식입니다: ${file.fieldname}`), false);
      return;
    }

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = {
    thumbnail: ["image/jpeg", "image/png", "image/jpg"],
    video: ["video/mp4", "video/mkv", "video/avi", "video/mov"],
  };

  if (file.fieldname === "thumbnail" && allowedTypes.thumbnail.includes(file.mimetype)) {
    cb(null, true);
  } else if (file.fieldname === "video" && allowedTypes.video.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error(`지원하지 않는 파일 형식입니다: ${file.mimetype}`), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB
});

// 동영상 및 썸네일 업로드 라우트 핸들러
const uploadVideo = async (req, res) => {
  try {
    console.log("=== 요청 데이터 시작 ===");
    console.log("req.body:", req.body);
    console.log("req.files:", req.files);
    console.log("=== 요청 데이터 끝 ===");

    if (!req.files || !req.files.thumbnail || !req.files.video) {
      return res.status(400).json({ message: "썸네일 또는 동영상 파일이 누락되었습니다." });
    }

    const thumbnailPath = `/uploads/images/thumbnail/${req.files.thumbnail[0].filename}`;
    const videoPath = `/uploads/video/${req.files.video[0].filename}`;
    
    // 파일 경로에 정적 호스트 URL 추가
    const serverUrl = "http://localhost:8000"; // 환경 변수로 설정 가능
    const fullThumbnailUrl = `${serverUrl}${thumbnailPath}`;
    const fullVideoUrl = `${serverUrl}${videoPath}`;

    const newVideo = new ShowuVideo({
      uploaduser: req.user._id,
      title: req.body.title,
      detail: req.body.detail,
      category: req.body.category,
      thumbnail: thumbnailPath, // 썸네일 경로 (DB에 상대 경로 저장)
      videoUrl: videoPath, // 동영상 경로 (DB에 상대 경로 저장)
      videoelement: req.body.videoelement,
      videoelement2: req.body.videoelement2,
      review: req.body.review,
      openclose: req.body.openclose === "공개" ? 1 : 0,
    });

    console.log("=== 저장된 비디오 데이터 ===");
    console.log(newVideo);

    await newVideo.save();

    res.status(201).json({
      message: "동영상과 썸네일이 성공적으로 업로드되었습니다.",
      videoPath: fullVideoUrl, // 프론트엔드로 반환
      thumbnailPath: fullThumbnailUrl, // 프론트엔드로 반환
      video: newVideo,
    });
  } catch (error) {
    console.error("동영상 업로드 중 오류 발생:", error);
    res.status(500).json({
      message: "동영상 업로드 중 오류가 발생했습니다.",
      error: error.message,
    });
  }
};

export { upload, uploadVideo };
