import express from 'express';
import { createMdPayment } from '../../controller/shop/mdPaymentController.js';

const mdPaymentRouter = express.Router();

mdPaymentRouter.post('/', createMdPayment)

export default mdPaymentRouter;