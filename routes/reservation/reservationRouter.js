import express from "express";
import eventsRouter from "./eventsRouter.js"; // eventsRouter 가져오기
import likeRouter from "./likeRouter.js"; // 좋아요(찜) 가져오기
import seatRouter from "./seatRouter.js"; // seatRouter 가져오기
import commentRouter from "./commentRouter.js"; // 댓글 라우터 가져오기
import rentalRouter from "./rentalRouter.js"; // 공간 대여 라우터 가져오기
import ticketPaymentRouter from "./ticketPaymentRouter.js"; // 티켓 토스 API 라우터 가져오기
import rentalPaymentRouter from "./rentalPaymentRouter.js"; // 공간 대여 결제 라우터 가져오기

const reservationRouter = express.Router();

reservationRouter.use("/", eventsRouter); // /reservation 경로에 이벤트 라우터 연결
reservationRouter.use("/", likeRouter); // /reservation 경로에 좋아요(찜) 라우터 연결
reservationRouter.use("/", seatRouter); // /reservation 경로에 seat 라우터 연결
reservationRouter.use("/", commentRouter); // /reservation 경로에 댓글 라우터 연결
reservationRouter.use("/", rentalRouter); // reservation 경로에 공간 대여 라우터 연결
reservationRouter.use("/toss", ticketPaymentRouter); // reservation 경로에 티켓 토스 API 라우터 연결
reservationRouter.use("/rentalToss", rentalPaymentRouter); // reservation 경로에 공간 대여 결제 라우터 연결

export default reservationRouter;
