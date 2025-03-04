import express from "express";
import mdRouter from "./mdRouter.js";
import auctionRouter from "./auctionRouter.js";
import mdCartRouter from "./mdCartRouter.js";
import mdInquiryRouter from "./mdInquiryRouter.js";
import auctionInquiryRouter from "./auctionInquiryRouter.js";
import mdPaymentRouter from "./mdPaymentRouter.js";
import mdTossPaymentRouter from "./mdTossPaymentRouter.js"; 
import auctionPaymentRouter from "./auctionPaymentRouter.js"; 
import auctionTossPaymentRouter from "./auctionTossPaymentRouter.js";

const shopRouter = express.Router();

shopRouter.use("/md", mdRouter); // /shop/md
shopRouter.use("/md/inquiry", mdInquiryRouter); // shop/md/inquiry
shopRouter.use("/auction/inquiry", auctionInquiryRouter); // shop/auction/inquiry
shopRouter.use("/md/cart", mdCartRouter); // shop/md/cart
shopRouter.use("/md/payment", mdPaymentRouter); // shop/md/payment
shopRouter.use("/auction", auctionRouter); // /shop/auction
shopRouter.use("/md/payment/toss-payment", mdTossPaymentRouter); // /shop/md/payment/toss-payment
shopRouter.use("/auction/payment", auctionPaymentRouter); // /shop/auction/payment
shopRouter.use("/auction/payment/toss-payment", auctionTossPaymentRouter); // /shop/auction/payment/toss-payment

export default shopRouter;
