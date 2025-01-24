import express from 'express';
import passport from 'passport';
import upgradRouter from './upgradRouter.js';

const adminRouter = express.Router();

adminRouter.use("/upgrade", upgradRouter)

export default adminRouter;