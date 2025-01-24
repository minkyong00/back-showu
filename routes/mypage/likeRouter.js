import express from 'express';
import passport from 'passport';
import { likeAuction, likeMd, likeSpace, likeTeam, likeTicket } from '../../controller/mypage/likeController.js';

const likeRouter = express.Router()

// 찜-MD '/my/like/md'
likeRouter.get("/md", passport.authenticate('jwt', { session: false }), likeMd)
// 찜-경매 '/my/like/auction'
likeRouter.get("/auction", passport.authenticate('jwt', { session : false }), likeAuction)
// 찜-공간대여 '/my/like/space'
likeRouter.get("/space", passport.authenticate('jwt', { session : false }), likeSpace)
// 찜-팀매칭 '/my/like/team'
likeRouter.get("/team", passport.authenticate('jwt', { session : false }), likeTeam)
// 찜-레슨 '/my/like/lesson'
// likeRouter.get("/lesson", passport.authenticate('jwt', { session : false }), likeLesson)
// 찜-티켓 '/my/like/ticket'
likeRouter.get("/ticket", passport.authenticate('jwt', { session : false }), likeTicket)


export default likeRouter