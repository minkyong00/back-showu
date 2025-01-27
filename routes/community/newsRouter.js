import express from 'express';
import { getAllNews, getNewsById } from '../../controller/community/newsController.js';


const newsRouter = express.Router();


// 뉴스 전체 목록 조회
newsRouter.get("/", getAllNews);

// 특정 뉴스 조회 '/community/newsMain/:id'
newsRouter.get("/:id", getNewsById);


export default newsRouter;