import express from 'express';
import upgradRouter from './upgradRouter.js';
import teamRouter from './teamRouter.js';

const adminRouter = express.Router();

adminRouter.use("/upgrade", upgradRouter)

adminRouter.use("/team", teamRouter)

export default adminRouter;