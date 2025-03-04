import express from "express";
import { mdTossPayment } from "../../controller/shop/mdTossPaymentController.js";

const mdTossPaymentRouter = express.Router();

mdTossPaymentRouter.post("/", mdTossPayment); // POST 요청 처리

export default mdTossPaymentRouter;
