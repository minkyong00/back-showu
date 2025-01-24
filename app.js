import express from 'express';
import bodyParser from 'body-parser';
import connect from './connect/connect.js'
import cors from 'cors';
import dotenv from 'dotenv';
import rootRouter from './routes/index.js';
import passport from 'passport';
import { initializePassport } from './auth/auth.js';
import path from 'path';
import { fileURLToPath } from 'url' 

// ES Modules에서 __dirname 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

connect()
dotenv.config()

const app = express()
const port = 8000;

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Content-Type", "text/html; charset=utf-8")
  next()
})

app.use(express.urlencoded({extended : false}))
app.use(cors({
  origin : "*",
  method : ["GET", "POST", "DELETE", "PUT"]
}))

// passport 초기화 및 사용
app.use(passport.initialize())
initializePassport()

// 폴더의 접근 권한 제공(정적 파일 제공)
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));
// app.use(uploadMiddleWare)
  
app.use("/", rootRouter)
app.listen(port)