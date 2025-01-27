import express from 'express';
import passport from 'passport';
import { getPaymentList } from '../../controller/mypage/myPaymentController.js';

const paymentRouter = express.Router();

// "my/payment/all"
paymentRouter.get("/all", passport.authenticate('jwt', { session : false }), getPaymentList)

export default paymentRouter;