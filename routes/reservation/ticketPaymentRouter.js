import express from "express";
import { tossPayment } from "../../controller/reservation/ticketPaymentController.js";

const ticketPaymentRouter = express.Router();

ticketPaymentRouter.post("/", tossPayment); // POST 요청 처리

export default ticketPaymentRouter;
