import express from 'express';
import passport from 'passport';
import { myActivePost } from '../../controller/mypage/myActiveController.js';

const myActiveRouter = express.Router()

// 커뮤니티 작성한 글 목록 '/my/my-active/post'
myActiveRouter.get("/post", passport.authenticate('jwt', { session: false }), myActivePost)

export default myActiveRouter