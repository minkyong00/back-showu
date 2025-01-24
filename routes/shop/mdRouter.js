import express from 'express';
import { addToLike, getLike, getMdProduct, getMdProductById, removeFromLike } from '../../controller/shop/mdController.js';
import passport from 'passport';

const mdRouter = express.Router();

mdRouter.get("/", getMdProduct) // /shop/md (MdMain)
mdRouter.get("/detail/:id", getMdProductById) // /shop/md/detail/1 (MdDetail)
mdRouter.post("/cart", getMdProduct) // /shop/md/cart (MdCart)
mdRouter.post("/payment", getMdProduct) // /shop/md/payment (MdPayment)


mdRouter.post("/like", passport.authenticate('jwt', {session: false}, addToLike))
mdRouter.delete("/like", passport.authenticate('jwt', {session: false}, removeFromLike))
mdRouter.get("/like/:userId", passport.authenticate('jwt', { session: false }), getLike); 

export default mdRouter;