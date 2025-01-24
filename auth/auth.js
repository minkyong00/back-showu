import passport from 'passport';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt'
import User from '../models/users/userSchema.js';
import jwt from 'jsonwebtoken';
import { Strategy as LocalStrategy } from 'passport-local';
import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as KakaoStrategy } from 'passport-kakao';
import { Strategy as NaverStrategy } from 'passport-naver-v2';

dotenv.config()

// 일반 로그인
// 화면에서 보낸 데이터의 key값과 일치시켜 검증
const passportConfig = {
  usernameField : 'email', passwordField : 'password'
}

const passportVerify = async (email, password, done) => {
  try {
    // 유저 아이디로 일치하는 유저 데이터 검색
    const foundUser = await User.findOne({ email : email }).lean()
    
    if(!foundUser){
      //error, value, info(메세지)
      return done(null, false, { message : "존재하지 않은 이메일입니다"})
    }

    //비밀번호 검사
    const passwordMatch = await bcrypt.compare(password, foundUser.password);
    if(!passwordMatch){
      return done(null, false, { message : "올바르지 않은 비밀번호입니다"})
    }

    // 비밀번호, 아이디가 일치하는 사용자
    return done(null, foundUser)

  } catch (error) {
    console.error("passportVerifyError", error)
  }
}

// jwt 검증 로직
const SECRET_KEY = process.env.SECRET_KEY;

const JWTConfig = {
  jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey : SECRET_KEY
}

const JWTVerify = async (jwtPayload, done) => {
  try {
    console.log("JWT Payload:", jwtPayload);

    const foundUser = await User.findOne({ email: jwtPayload.email }).lean();

    if (!foundUser) {
      return done(null, false, { message: "올바르지 않은 인증 정보입니다." });
    }

    // 유저가 존재하면 유저 정보 반환
    return done(null, foundUser);

  } catch (error) {
    console.error("JWTVerify Error:", error);

    // 에러 발생 시 처리
    return done(error);
  }
};

// 구글 로그인
const GOOGLE_ID = process.env.GOOGLE_ID;
const GOOGLE_SECRET = process.env.GOOGLE_SECRET;

const googleConfig = {
  clientID : GOOGLE_ID,
  clientSecret : GOOGLE_SECRET,
  callbackURL : '/auth/google/callback' // 구글 로그인 Redirect URI 경로
}

const googleVerify = async (accessToken, refreshToken, profile, done) => {
  console.log(profile)
  const { emails, displayName, provider, photos } = profile;
  const email = emails[0].value;
  const picture = photos[0].value;
  console.log("picture", picture)
  
  try {

    // 기존의 회원 중 아이디가 겹치는 사람이 있는지 확인하고 연동한다.
    const exUser = await User.findOne({ email : email }).lean()
    console.log("exUser", exUser)
    
    // jwt 토큰을 발급해서 화면으로 보낸다.
    const jwtToken = jwt.sign({
        email : email,
        issuer : 'minkyoung'
      },
        SECRET_KEY,
      {
        expiresIn : "24h"
      }
    )
    
    if(exUser){

      // 처음 접속한 사람이 아니라면 바로 로그인 시킨다.
      exUser.jwtToken = jwtToken;
      done(null, exUser)
      
    }else {
      // 소셜 로그인을 처음 접속했다면, 회원 가입 후 보낸다.
      const createdUser = await User.create({
        email : email,
        name : displayName,
        provider : provider,
        picture : picture
      })
      
      const exUser = await User.findOne({ email : email }).lean()
      exUser.jwtToken = jwtToken;

      done(null, exUser);
    }

  } catch (error) {
    console.error("googleVerify err", error)
    
  }
}

// 카카오 로그인
const KAKAO_REST_API = process.env.KAKAO_REST_API;
const kakaoConfig = {
  clientID : KAKAO_REST_API,
  callbackURL : "/auth/kakao/callback"
}

const kakaoVerify = async (accessToken, refreshToken, profile, done) => {
  // console.log(profile)
  const { username, provider, _json } = profile
  const picture = _json.properties.profile_image
  const email = _json.kakao_account.email;
 
  try {

    // 기존의 회원 중 아이디가 겹치는 사람이 있는지 확인하고 연동한다.
    const exUser = await User.findOne({ email : email }).lean()
    console.log("exUser", exUser)
    
    // jwt 토큰을 발급해서 화면으로 보낸다.
    const jwtToken = jwt.sign({
        email : email,
        issuer : 'minkyoung'
      },
        SECRET_KEY,
      {
        expiresIn : "24h"
      }
    )
    
    if(exUser){

      // 처음 접속한 사람이 아니라면 바로 로그인 시킨다.
      exUser.jwtToken = jwtToken;
      done(null, exUser)
      
    }else {
      // 소셜 로그인을 처음 접속했다면, 회원 가입 후 보낸다.
      const createdUser = await User.create({
        email : email,
        name : username,
        provider : provider,
        picture : picture
      })
      
      const exUser = await User.findOne({ email : email }).lean()
      exUser.jwtToken = jwtToken;

      done(null, exUser);
    }

  } catch (error) {
    console.error("googleVerify err", error)
    
  }
}

// 네이버 로그인
const NAVER_ID = process.env.NAVER_ID;
const NAVER_SECRET = process.env.NAVER_SECRET;

const naverConfig = {
  clientID : NAVER_ID,
  clientSecret : NAVER_SECRET,
  callbackURL : "/auth/naver/callback"
}

const naverVerify = async (accessToken, refreshToken, profile, done) => {
  // console.log(profile)
  const { provider, name, email, mobile, profileImage } = profile

  try {

    // 기존의 회원 중 아이디가 겹치는 사람이 있는지 확인하고 연동한다.
    const exUser = await User.findOne({ email : email }).lean()
    console.log("exUser", exUser)
    
    // jwt 토큰을 발급해서 화면으로 보낸다.
    const jwtToken = jwt.sign({
        email : email,
        issuer : 'minkyoung'
      },
        SECRET_KEY,
      {
        expiresIn : "24h"
      }
    )
    
    if(exUser){

      // 처음 접속한 사람이 아니라면 바로 로그인 시킨다.
      exUser.jwtToken = jwtToken;
      done(null, exUser)
      
    }else {
      // 소셜 로그인을 처음 접속했다면, 회원 가입 후 보낸다.
      const createdUser = await User.create({
        email : email,
        name : name,
        provider : provider,
        picture : profileImage,
        phone : mobile
      })
      
      const exUser = await User.findOne({ email : email }).lean()
      exUser.jwtToken = jwtToken;

      done(null, exUser);
    }

  } catch (error) {
    console.error("googleVerify err", error)
    
  }

}

// passport로 전략들을 실행
const initializePassport = () => {
  passport.use('local', new LocalStrategy(passportConfig, passportVerify))
  passport.use('jwt', new JWTStrategy(JWTConfig, JWTVerify))
  passport.use('google', new GoogleStrategy(googleConfig, googleVerify))
  passport.use('kakao', new KakaoStrategy(kakaoConfig, kakaoVerify))
  passport.use('naver', new NaverStrategy(naverConfig, naverVerify))
}

export { initializePassport }