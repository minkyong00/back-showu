import express from 'express'
import passport from 'passport';
import { addVodComment, deleteVodComment, getVodCommentsByVideoId, updateVodComment } from '../../controller/vod/vodComment.js';



const vodcommentRouter=express.Router();




vodcommentRouter.get("/video/:id", getVodCommentsByVideoId);
// 추가
vodcommentRouter.post("/:id/comments", passport.authenticate("jwt", { session: false }), addVodComment);

//수정
vodcommentRouter.put("/comments/:id", passport.authenticate("jwt", { session: false }), updateVodComment);

// 삭제
vodcommentRouter.delete("/comments/:id", passport.authenticate("jwt", { session: false }), deleteVodComment);
// 관심


//비디오 썸네일 포스트

export default vodcommentRouter