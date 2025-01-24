import express from 'express';
import teamRouter from './teamRouter.js';
// import lessonRouter from './lessonRouter.js';


const showuRouter = express.Router()

// showuRouter.get("/lesson", getLessonListData)
// showuRouter.get("/details/:id", getLessonListDetailsData)

showuRouter.use("/team", teamRouter)
// showuRouter.use("/lesson", lessonRouter)

export default showuRouter 