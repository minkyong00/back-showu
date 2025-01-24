import express from 'express';
import { getAuctionProduct, getAuctionProductById, seedAuctionProducts } from '../../controller/shop/auctionController.js';

const auctionRouter = express.Router();

auctionRouter.get("/", getAuctionProduct) // /shop/auction (AuctionMain)
auctionRouter.get("/detail/:id", getAuctionProductById) // /shop/auction/detail/1 (AuctionDetail)

export default auctionRouter;