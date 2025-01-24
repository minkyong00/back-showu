import express from "express";
import {
  addPayment,
  getAllPayments,
  getPaymentsByUser,
} from "../../controllers/reservation/paymentController.js";

const paymentRouter = express.Router();

paymentRouter.post("/", addPayment); // 결제 정보 추가
paymentRouter.get("/", getAllPayments); // 모든 결제 정보 조회
paymentRouter.get("/user/:userId", getPaymentsByUser); // 사용자별 결제 정보 조회

export default paymentRouter;
