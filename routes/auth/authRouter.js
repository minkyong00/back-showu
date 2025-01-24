import express from 'express'
import passport from 'passport'
import { localStrategy, jwtStrategy, changePasswordStrategy } from '../../controller/auth/authController.js';

const authRouter = express.Router();
const clientURL = "http://localhost:3000/main"

// 로컬 로그인
authRouter.post("/local", passport.authenticate('local', {session : false}), localStrategy)

// jwt 토큰
authRouter.post("/jwt", passport.authenticate('jwt', {session : false}), jwtStrategy)

//이메일 인증번호
authRouter.post("/api/change-password", changePasswordStrategy)

// 구글 소셜 로그인
authRouter.get("/google", passport.authenticate('google', {session : false, scope : ['profile', 'email']}))
authRouter.get("/google/callback", passport.authenticate('google', { session :false, failureRedirect : clientURL }), (req, res) => {
  // console.log("passport로 소셜 로그인 완료!", req.user)
  const { jwtToken } = req.user;
  return res.redirect(`${clientURL}?jwtToken=${jwtToken}`)
})


// 카카오 로그인
authRouter.get("/kakao", passport.authenticate('kakao', { session : false }))
authRouter.get("/kakao/callback", passport.authenticate('kakao', { session : false, failureRedirect : clientURL }), (req, res) => {
  const { jwtToken } = req.user;
  return res.redirect(`${clientURL}?jwtToken=${jwtToken}`)
})

// 네이버 로그인
authRouter.get("/naver", passport.authenticate('naver', { session : false }))
authRouter.get("/naver/callback", passport.authenticate('naver', { session : false, failureRedirect : clientURL }), (req, res) => {
  const { jwtToken } = req.user;
  return res.redirect(`${clientURL}?jwtToken=${jwtToken}`)
})

export default authRouter;