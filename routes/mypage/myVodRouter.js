import express from 'express';
import passport from 'passport';
import { getMyVod, vodSubscript } from '../../controller/mypage/myVodController.js';

const myVodRouter = express.Router()

// 구독한 리스트 '/my/vod/subscript'
myVodRouter.get("/subscript", passport.authenticate('jwt', { session: false }), vodSubscript)

// 나의 vod '/my/vod'
myVodRouter.get("/", passport.authenticate('jwt', { session: false }), getMyVod)

export default myVodRouter