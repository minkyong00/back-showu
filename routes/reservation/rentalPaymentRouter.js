import express from "express";
import { rentalTossPayment } from "../../controller/reservation/rentalPaymentController.js";

const rentalPaymentRouter = express.Router();

rentalPaymentRouter.post("/", rentalTossPayment); // POST 요청 처리

export default rentalPaymentRouter;
