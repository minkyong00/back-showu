import express from "express";
import passport from "passport";
import { 
  getCommunityById, 
  getAllCommunities, 
  toggleLike,
  deleteCommunityPost,
  updateCommunityPost,
} from "../../controller/community/communityController.js";

import { 
  addComment, 
  deleteComment, 
  getCommentsByPostId, 
  getCommunityWithComments,
  updateComment
} from "../../controller/community/commentController.js";

import { 
  getAllCommunityPosts, 
  uploadFile 
} from "../../controller/community/writeController.js";

import newsRouter from "../community/newsRouter.js";
import auditionRouter from "./auditionRouter.js";
import writeRouter from "./communityWriteRouter.js";

const communityRouter = express.Router();


// 커뮤니티 라우터
communityRouter.get("/", getAllCommunities);
communityRouter.get("/:id/comments", getCommentsByPostId);

communityRouter.post("/:id/comments", passport.authenticate("jwt", { session: false }), addComment);

communityRouter.delete("/comments/:commentId", passport.authenticate("jwt", { session: false }), deleteComment);

communityRouter.post("/:id/likes", passport.authenticate("jwt", { session: false }), toggleLike);
// communityRouter.post("/create", passport.authenticate("jwt", { session: false }), createCommunityPost);

communityRouter.get("/all", getAllCommunityPosts);

communityRouter.delete("/delete/:id", passport.authenticate("jwt", { session: false }), deleteCommunityPost);

communityRouter.put("/update/:id", passport.authenticate("jwt", { session: false }), updateCommunityPost);

communityRouter.get("/post/:id", passport.authenticate("jwt", { session: false }), getCommunityById);

communityRouter.get("/post/:id", getCommunityById); // 특정 글 조회


// 댓글
// communityRouter.get("/:id/comments", getCommentsByPostId);
communityRouter.post("/:id/comments", passport.authenticate("jwt", { session: false }), addComment);
communityRouter.put("/comments/:commentId", passport.authenticate("jwt", { session: false }), updateComment);
communityRouter.delete("/comments/:commentId", passport.authenticate("jwt", { session: false }), deleteComment);


communityRouter.post("/upload", uploadFile);

// 게시물과 댓글 함께 반환
communityRouter.get("/:id/details", getCommunityWithComments); 

// 뉴스 라우터 연결
communityRouter.use("/newsMain", newsRouter);

// 오디션 라우터 연결
communityRouter.use("/audition", auditionRouter);

// 커뮤니티 글 작성 라우터 연결
communityRouter.use("/write", writeRouter)


// 커뮤니티 상세 정보 조회
communityRouter.get('/:id', getCommunityById); 

// 파일 업로드
communityRouter.post("/upload", uploadFile); 







export default communityRouter;

