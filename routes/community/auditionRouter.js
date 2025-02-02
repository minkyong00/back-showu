import express from "express";
import { getAllAuditions, getAuditionById } from "../../controller/community/auditionController.js";



const auditionRouter = express.Router();

// 전체 오디션 목록 
auditionRouter.get("/", getAllAuditions);

// 특정 오디션 정보
auditionRouter.get('/:id', getAuditionById);

export default auditionRouter;
