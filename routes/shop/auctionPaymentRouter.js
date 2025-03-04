import express from "express";
import { confirmAuctionPayment } from "../../controller/shop/auctionPaymentController.js";

const auctionPaymentRouter = express.Router();

auctionPaymentRouter.post("/confirm-payment", confirmAuctionPayment);

export default auctionPaymentRouter;
