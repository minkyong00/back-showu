import express from "express";
import { auctionTossPayment } from "../../controller/shop/auctionTossPaymentController.js";

const auctionTossPaymentRouter = express.Router();

auctionTossPaymentRouter.post("/", auctionTossPayment); // POST 요청 처리

export default auctionTossPaymentRouter;
