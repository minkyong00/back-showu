import express from 'express';
import { addToMdCart, getMdCartItems, removeFromMdCart, updateMdCartQuantity } from '../../controller/shop/mdCartController.js';


const mdCartRouter = express.Router();

mdCartRouter.get('/', getMdCartItems);
mdCartRouter.post('/', addToMdCart);
// mdCartRouter.delete('/:id', removeFromMdCart);
mdCartRouter.delete('/', removeFromMdCart);
mdCartRouter.put('/', updateMdCartQuantity);

export default mdCartRouter;