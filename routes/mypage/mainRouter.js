import express from 'express';
import passport from 'passport';
import { getMainTeam } from '../../controller/mypage/mainController.js';

const mainRouter = express.Router();

// mainRouter.get("/lesson", getMainLesson)
mainRouter.get("/team", getMainTeam)

export default mainRouter;