import express from 'express';
import { tossPayment } from '../../controller/shop/paymentController.js';

const paymentRouter = express.Router();

paymentRouter.post("/payment", tossPayment)

export default paymentRouter;