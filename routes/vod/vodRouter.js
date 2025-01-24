import express from 'express';
import multer from 'multer';
import path from 'path';
import cors from 'cors'
import { getAllVideo, getShowuVideo } from '../../controller/vod/vodController.js';
import vodInfoRouter from './vodInfoRouter.js';
import vodcommentRouter from './vodcomment.js';
import { upload, uploadVideo } from '../../controller/vod/vodInsertVideo.js';
import passport from 'passport';
import {getUserId } from '../../controller/vod/vodComment.js';

const vodRouter = express.Router();
vodRouter.get('/', getAllVideo);
vodRouter.get('/showuvideo',getShowuVideo)

vodRouter.use(cors())



vodRouter.use('/info',vodInfoRouter);
vodRouter.use('/showuinfo',vodInfoRouter)
vodRouter.use('/upload',vodInfoRouter)
vodRouter.use('/comment',vodcommentRouter)
vodRouter.use('/add',vodcommentRouter)
vodRouter.post("/video",passport.authenticate("jwt", { session: false }), upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'video', maxCount: 1 }]), uploadVideo);
vodRouter.get("/user",passport.authenticate("jwt", { session: false }),getUserId)
vodRouter.use("/delete",vodcommentRouter)
vodRouter.use("/update",vodcommentRouter)




export default vodRouter;
