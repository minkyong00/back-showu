import express from "express";
import { confirmPayment } from "../../controller/shop/mdPaymentController.js";

const mdPaymentRouter = express.Router();

mdPaymentRouter.post("/confirm-payment", confirmPayment);

export default mdPaymentRouter;
