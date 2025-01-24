import express from 'express';
import mdRouter from './mdRouter.js';
// import inquiryRouter from './inquiryRouter.js';
import auctionRouter from './auctionRouter.js';
import paymentRouter from './paymentRouter.js';
// import cartRouter from './mdCartRouter.js';
import mdCartRouter from './mdCartRouter.js';
import mdInquiryRouter from './mdInquiryRouter.js';
import auctionInquiryRouter from './auctionInquiryRouter.js';
import mdPaymentRouter from './mdPaymentRouter.js';
import passport from 'passport';
import { addToLike, getLike, removeFromLike } from '../../controller/shop/mdController.js';

const shopRouter = express.Router();

shopRouter.use("/md", mdRouter); // /shop/md
shopRouter.use("/md/inquiry", mdInquiryRouter); //shop/md/inquiry
shopRouter.use("/auction/inquiry", auctionInquiryRouter) //shop/auction/inquiry
shopRouter.use("/md/cart", mdCartRouter) // shop/md/cart 
shopRouter.use("/md/payment", mdPaymentRouter); //shop/md/payment
shopRouter.use("/auction", auctionRouter); // /shop/auction



export default shopRouter;