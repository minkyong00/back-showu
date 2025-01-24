import express from 'express';
import { index } from '../controller/index.js';
import userRouter from './user/userRouter.js';
import authRouter from './auth/authRouter.js';
import showuRouter from './showu/showuRouter.js';
import shopRouter from './shop/shopRouter.js';
import vodRouter from './vod/vodRouter.js';
import reservationRouter from './reservation/reservationRouter.js';
import communityRouter from './community/communityRouter.js';
import mypageRouter from './mypage/mypageRouter.js';
import adminRouter from './admin/adminRouter.js';

const rootRouter = express.Router();

rootRouter.get("/", index)
rootRouter.use("/users", userRouter)
rootRouter.use("/admin", adminRouter)
rootRouter.use("/auth", authRouter)
rootRouter.use("/my", mypageRouter)
rootRouter.use("/community", communityRouter)
rootRouter.use("/showu", showuRouter)
rootRouter.use("/shop", shopRouter)
rootRouter.use("/vod", vodRouter)
rootRouter.use("/reservation", reservationRouter)

export default rootRouter;