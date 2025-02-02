import express from 'express';
import likeRouter from './likeRouter.js';
import myActiveRouter from './myActiveRoter.js';
import myVodRouter from './myVodRouter.js';
import myShowuRouter from './myShowuRouter.js';
import myReservationRouter from './myReservationRouter.js';
import myUpgradeRouter from './myUpgradeRouter.js';
import mainRouter from './mainRouter.js';
import myPaymentRouter from './myPaymentRouter.js'

const mypageRouter = express.Router()

//showu - 팀 매칭, 레슨
mypageRouter.use("/showu", myShowuRouter)

//예약 - 공간,티켓
mypageRouter.use("/reservation", myReservationRouter)

// 활동 정보 
mypageRouter.use("/my-active", myActiveRouter)

//찜
mypageRouter.use("/like", likeRouter)

// vod
mypageRouter.use("/vod", myVodRouter)

//등급업
mypageRouter.use("/up-grade", myUpgradeRouter)

// 메인-레슨
mypageRouter.use("/main", mainRouter)

// 결제내역
mypageRouter.use("/payment" , myPaymentRouter)


export default mypageRouter